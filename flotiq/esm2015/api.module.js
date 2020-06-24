var ApiModule_1;
import * as tslib_1 from "tslib";
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
let ApiModule = ApiModule_1 = class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }
};
ApiModule.ctorParameters = () => [
    { type: ApiModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: HttpClient, decorators: [{ type: Optional }] }
];
ApiModule = ApiModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [],
        exports: [],
        providers: []
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, SkipSelf()),
    tslib_1.__param(1, Optional())
], ApiModule);
export { ApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3RpcS8iLCJzb3VyY2VzIjpbImFwaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFnQmxELElBQWEsU0FBUyxpQkFBdEIsTUFBYSxTQUFTO0lBUWxCLFlBQXFDLFlBQXVCLEVBQ25DLElBQWdCO1FBQ3JDLElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStEO2dCQUMvRSwwREFBMEQsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQWhCTSxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUF5QztRQUMzRCxPQUFPO1lBQ0gsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxDQUFFO1NBQzlFLENBQUM7SUFDTixDQUFDO0NBWUosQ0FBQTs7WUFWc0QsU0FBUyx1QkFBOUMsUUFBUSxZQUFJLFFBQVE7WUFDSCxVQUFVLHVCQUEzQixRQUFROztBQVRiLFNBQVM7SUFOckIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFPLEVBQUU7UUFDaEIsWUFBWSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxFQUFPLEVBQUU7UUFDaEIsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0lBU2dCLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsUUFBUSxFQUFFLENBQUE7R0FUZixTQUFTLENBa0JyQjtTQWxCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5cbmltcG9ydCB7IENvbnRlbnRCbG9nUG9zdFNlcnZpY2UgfSBmcm9tICcuL2FwaS9jb250ZW50QmxvZ1Bvc3Quc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZW50TWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvY29udGVudE1lZGlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JhcGhRTFNlcnZpY2UgfSBmcm9tICcuL2FwaS9ncmFwaFFMLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJuYWxTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW50ZXJuYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL2FwaS9tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaEFQSVNlcnZpY2UgfSBmcm9tICcuL2FwaS9zZWFyY2hBUEkuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6ICAgICAgW10sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQXBpTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbkZhY3Rvcnk6ICgpID0+IENvbmZpZ3VyYXRpb24pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBBcGlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBDb25maWd1cmF0aW9uLCB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSB9IF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBBcGlNb2R1bGUsXG4gICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcGlNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpbiB5b3VyIGJhc2UgQXBwTW9kdWxlIG9ubHkuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFodHRwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIGltcG9ydCB0aGUgSHR0cENsaWVudE1vZHVsZSBpbiB5b3VyIEFwcE1vZHVsZSEgXFxuJyArXG4gICAgICAgICAgICAnU2VlIGFsc28gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA1NzUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==