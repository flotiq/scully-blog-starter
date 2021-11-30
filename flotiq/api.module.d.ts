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

//# sourceMappingURL=api.module.d.ts.map