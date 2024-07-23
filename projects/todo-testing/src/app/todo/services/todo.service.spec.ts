import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { TodoItem } from '../../shared';
import { TodoService } from './todo.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const todoDataResult = [
    { id: 1, checked: false, description: 'test1' },
    { id: 2, checked: false, description: 'test2' },
    { id: 3, checked: false, description: 'test3' },
    { id: 4, checked: false, description: 'test4' }
] as TodoItem[];

////////  Tests  /////////////
describe('Http-TodoService (mockBackend)', () => {

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    imports: [],
    providers: [
        TodoService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
})
            .compileComponents();
    }));

    it('can instantiate service when inject service',
        inject([TodoService], (service: TodoService) => {
            expect(service instanceof TodoService).toBe(true);
        }));

    it('load heroes from fake', inject(
        [HttpTestingController, TodoService],
        (
            httpMock: HttpTestingController,
            sut: TodoService
        ) => {
            // Action
            sut.load();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const mockReq = httpMock.expectOne((sut as any).url);

            // Assert
            expect(mockReq.cancelled).toBeFalsy();
            expect(mockReq.request.responseType).toEqual('json');

            mockReq.flush(todoDataResult);
            expect(sut.todos).toEqual(todoDataResult);

            httpMock.verify();
        }
    ));
});
