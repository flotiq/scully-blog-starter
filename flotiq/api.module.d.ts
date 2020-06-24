import { ModuleWithProviders } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class ApiModule {
    static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule>;
    constructor(parentModule: ApiModule, http: HttpClient);
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ApiModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ApiModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5kLnRzIiwic291cmNlcyI6WyJhcGkubW9kdWxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTsrREFDK0QsOEJBQW1COzs7O0FBRWxGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXBpTW9kdWxlIHtcclxuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb25GYWN0b3J5OiAoKSA9PiBDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVycztcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudE1vZHVsZTogQXBpTW9kdWxlLCBodHRwOiBIdHRwQ2xpZW50KTtcclxufVxyXG4iXX0=