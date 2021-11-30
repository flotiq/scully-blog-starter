import * as tslib_1 from "tslib";
/**
 * Flotiq User API
 * ## Getting started   This is your Flotiq User API that allows you to access your data through the Content API that you defined.   ### Access to data   There are several methods that you can use to access your data:  * Live API docs - available via <code>Try it out</code> button available next to each endpoint   * Copying example code on the right side of each endpoint  * By downloading the SDKs available in mulitple languages.  * By downloading the Postman collection and importing it into Postman.    Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).   ### Authorization   In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.   It\'s also possible to use scoped API keys - you can create those in the API keys section of the Flotiq user interface. This will allow you to create a key that only authorizes access to a specific content type (or a set of content types, if you choose so). Read more about how to use and create API keys in the [API keys documentation](https://flotiq.com/docs/API/).   ## Object access   Once you define a Content Type it will become available in your Content API as a set of endpoints that will allow you to work with objects:   * create  * list  * update  * delete  * batch create  * retrieve single object.  ### Hydration   When you build Content Types that have relation to others your objects will optionally support hydration of related entities. The endpoints that support object retrieval accept a `hydrate` parameter, which can be used to easily fetch hydrated objects. Since this breaks the standard REST concepts - it\'s not enabled by default, but it\'s a very handy feature that allows to reduce the amount of HTTP requests sent over the wire and we strongly recommend to use it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: hello@flotiq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../variables";
import * as i3 from "../configuration";
let MediaService = class MediaService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://api.flotiq.com';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object") {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    getMedia(widthHeight, key, observe = 'body', reportProgress = false, options) {
        if (widthHeight === null || widthHeight === undefined) {
            throw new Error('Required parameter widthHeight was null or undefined when calling getMedia.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling getMedia.');
        }
        let headers = this.defaultHeaders;
        // authentication (HeaderApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-AUTH-TOKEN"]) {
            headers = headers.set('X-AUTH-TOKEN', this.configuration.apiKeys["X-AUTH-TOKEN"]);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/image/${encodeURIComponent(String(widthHeight))}/${encodeURIComponent(String(key))}`, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    postMedia(file, type, observe = 'body', reportProgress = false, options) {
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling postMedia.');
        }
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling postMedia.');
        }
        let headers = this.defaultHeaders;
        // authentication (HeaderApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-AUTH-TOKEN"]) {
            headers = headers.set('X-AUTH-TOKEN', this.configuration.apiKeys["X-AUTH-TOKEN"]);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'multipart/form-data'
        ];
        const canConsumeForm = this.canConsumeForm(consumes);
        let formParams;
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        }
        else {
            formParams = new HttpParams({ encoder: this.encoder });
        }
        if (file !== undefined) {
            formParams = formParams.append('file', file) || formParams;
        }
        if (type !== undefined) {
            formParams = formParams.append('type', type) || formParams;
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/api/media`, convertFormParamsToString ? formParams.toString() : formParams, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
MediaService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
];
MediaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.BASE_PATH, 8), i0.ɵɵinject(i3.Configuration, 8)); }, token: MediaService, providedIn: "root" });
MediaService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional())
], MediaService);
export { MediaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3RpcS8iLCJzb3VyY2VzIjpbImFwaS9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsdURBQXVEO0FBRXZELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUEyQixlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUNuQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQVksc0JBQXNCLENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQStCLFlBQVksQ0FBQztBQUkvRSxPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQzs7Ozs7QUFPckYsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQU9yQixZQUFzQixVQUFzQixFQUFnQyxRQUFnQixFQUFjLGFBQTRCO1FBQWhILGVBQVUsR0FBVixVQUFVLENBQVk7UUFMbEMsYUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3ZDLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFJdkMsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUN0QztRQUNELElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDakQsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFDO1FB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QUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDO0NBRUosQ0FBQTs7WUFoTXFDLFVBQVU7eUNBQUcsUUFBUSxZQUFHLE1BQU0sU0FBQyxTQUFTO1lBQStDLGFBQWEsdUJBQXZDLFFBQVE7OztBQVA5RixZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFRaUQsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBQyxtQkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUEsRUFBb0IsbUJBQUEsUUFBUSxFQUFFLENBQUE7R0FQaEcsWUFBWSxDQXVNeEI7U0F2TVksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmxvdGlxIFVzZXIgQVBJXG4gKiAjIyBHZXR0aW5nIHN0YXJ0ZWQgICBUaGlzIGlzIHlvdXIgRmxvdGlxIFVzZXIgQVBJIHRoYXQgYWxsb3dzIHlvdSB0byBhY2Nlc3MgeW91ciBkYXRhIHRocm91Z2ggdGhlIENvbnRlbnQgQVBJIHRoYXQgeW91IGRlZmluZWQuICAgIyMjIEFjY2VzcyB0byBkYXRhICAgVGhlcmUgYXJlIHNldmVyYWwgbWV0aG9kcyB0aGF0IHlvdSBjYW4gdXNlIHRvIGFjY2VzcyB5b3VyIGRhdGE6ICAqIExpdmUgQVBJIGRvY3MgLSBhdmFpbGFibGUgdmlhIDxjb2RlPlRyeSBpdCBvdXQ8L2NvZGU+IGJ1dHRvbiBhdmFpbGFibGUgbmV4dCB0byBlYWNoIGVuZHBvaW50ICAgKiBDb3B5aW5nIGV4YW1wbGUgY29kZSBvbiB0aGUgcmlnaHQgc2lkZSBvZiBlYWNoIGVuZHBvaW50ICAqIEJ5IGRvd25sb2FkaW5nIHRoZSBTREtzIGF2YWlsYWJsZSBpbiBtdWxpdHBsZSBsYW5ndWFnZXMuICAqIEJ5IGRvd25sb2FkaW5nIHRoZSBQb3N0bWFuIGNvbGxlY3Rpb24gYW5kIGltcG9ydGluZyBpdCBpbnRvIFBvc3RtYW4uICAgIEVhY2ggb2YgdGhlc2UgbWV0aG9kcyBpcyBkZXNjcmliZWQgaW4gbGVuZ3RoIGluIHRoZSBbdXNlciBkb2N1bWVudGF0aW9uXShodHRwczovL2Zsb3RpcS5jb20vZG9jcy8pLiAgICMjIyBBdXRob3JpemF0aW9uICAgSW4gb3JkZXIgdG8gbWFrZSB1c2Ugb2YgdGhlIHByb3ZpZGVkIGRvY3VtZW50YXRpb24sIGV4YW1wbGUgY29kZSwgU0RLcyBhbmQgc28gb24gLSB5b3Ugd2lsbCBuZWVkIHRvIHB1bGwgb3V0IHlvdXIgQVBJIGtleS4gV2UgcmVjb21tZW5kIHRoYXQgeW91IHN0YXJ0IHdpdGggdGhlIFJlYWRPbmx5IEFQSSBLZXkgd2hpY2ggd2lsbCBhbGxvdyB5b3UgdG8gbWFrZSBhbGwgdGhlIGBHRVRgIHJlcXVlc3RzIGJ1dCB3aWxsIGVycm9yLW91dCB3aGVuIHlvdSB0cnkgdG8gbW9kaWZ5IGNvbnRlbnQuIFBsZWFzZSByZW1lbWJlciB0byByZXBsYWNlIHRoZSBrZXkgZm9yIGBQT1NUYCwgYFBVVGAgYW5kIGBERUxFVEVgIGNhbGxzLiAgIEl0XFwncyBhbHNvIHBvc3NpYmxlIHRvIHVzZSBzY29wZWQgQVBJIGtleXMgLSB5b3UgY2FuIGNyZWF0ZSB0aG9zZSBpbiB0aGUgQVBJIGtleXMgc2VjdGlvbiBvZiB0aGUgRmxvdGlxIHVzZXIgaW50ZXJmYWNlLiBUaGlzIHdpbGwgYWxsb3cgeW91IHRvIGNyZWF0ZSBhIGtleSB0aGF0IG9ubHkgYXV0aG9yaXplcyBhY2Nlc3MgdG8gYSBzcGVjaWZpYyBjb250ZW50IHR5cGUgKG9yIGEgc2V0IG9mIGNvbnRlbnQgdHlwZXMsIGlmIHlvdSBjaG9vc2Ugc28pLiBSZWFkIG1vcmUgYWJvdXQgaG93IHRvIHVzZSBhbmQgY3JlYXRlIEFQSSBrZXlzIGluIHRoZSBbQVBJIGtleXMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9mbG90aXEuY29tL2RvY3MvQVBJLykuICAgIyMgT2JqZWN0IGFjY2VzcyAgIE9uY2UgeW91IGRlZmluZSBhIENvbnRlbnQgVHlwZSBpdCB3aWxsIGJlY29tZSBhdmFpbGFibGUgaW4geW91ciBDb250ZW50IEFQSSBhcyBhIHNldCBvZiBlbmRwb2ludHMgdGhhdCB3aWxsIGFsbG93IHlvdSB0byB3b3JrIHdpdGggb2JqZWN0czogICAqIGNyZWF0ZSAgKiBsaXN0ICAqIHVwZGF0ZSAgKiBkZWxldGUgICogYmF0Y2ggY3JlYXRlICAqIHJldHJpZXZlIHNpbmdsZSBvYmplY3QuICAjIyMgSHlkcmF0aW9uICAgV2hlbiB5b3UgYnVpbGQgQ29udGVudCBUeXBlcyB0aGF0IGhhdmUgcmVsYXRpb24gdG8gb3RoZXJzIHlvdXIgb2JqZWN0cyB3aWxsIG9wdGlvbmFsbHkgc3VwcG9ydCBoeWRyYXRpb24gb2YgcmVsYXRlZCBlbnRpdGllcy4gVGhlIGVuZHBvaW50cyB0aGF0IHN1cHBvcnQgb2JqZWN0IHJldHJpZXZhbCBhY2NlcHQgYSBgaHlkcmF0ZWAgcGFyYW1ldGVyLCB3aGljaCBjYW4gYmUgdXNlZCB0byBlYXNpbHkgZmV0Y2ggaHlkcmF0ZWQgb2JqZWN0cy4gU2luY2UgdGhpcyBicmVha3MgdGhlIHN0YW5kYXJkIFJFU1QgY29uY2VwdHMgLSBpdFxcJ3Mgbm90IGVuYWJsZWQgYnkgZGVmYXVsdCwgYnV0IGl0XFwncyBhIHZlcnkgaGFuZHkgZmVhdHVyZSB0aGF0IGFsbG93cyB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiBIVFRQIHJlcXVlc3RzIHNlbnQgb3ZlciB0aGUgd2lyZSBhbmQgd2Ugc3Ryb25nbHkgcmVjb21tZW5kIHRvIHVzZSBpdC5cbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMi4wLjFcbiAqIENvbnRhY3Q6IGhlbGxvQGZsb3RpcS5jb21cbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXG4gICAgICAgICBIdHRwUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cFBhcmFtZXRlckNvZGVjIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ3VzdG9tSHR0cFBhcmFtZXRlckNvZGVjIH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2VuY29kZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEJBU0VfUEFUSCwgQ09MTEVDVElPTl9GT1JNQVRTIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbmZpZ3VyYXRpb24nO1xuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwczovL2FwaS5mbG90aXEuY29tJztcbiAgICBwdWJsaWMgZGVmYXVsdEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XG4gICAgcHVibGljIGVuY29kZXI6IEh0dHBQYXJhbWV0ZXJDb2RlYztcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBAT3B0aW9uYWwoKUBJbmplY3QoQkFTRV9QQVRIKSBiYXNlUGF0aDogc3RyaW5nLCBAT3B0aW9uYWwoKSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlUGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuYmFzZVBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuY29kZXIgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZW5jb2RlciB8fCBuZXcgQ3VzdG9tSHR0cFBhcmFtZXRlckNvZGVjKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbnN1bWVzIHN0cmluZ1tdIG1pbWUtdHlwZXNcbiAgICAgKiBAcmV0dXJuIHRydWU6IGNvbnN1bWVzIGNvbnRhaW5zICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgZmFsc2U6IG90aGVyd2lzZVxuICAgICAqL1xuICAgIHByaXZhdGUgY2FuQ29uc3VtZUZvcm0oY29uc3VtZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICAgIGZvciAoY29uc3QgY29uc3VtZSBvZiBjb25zdW1lcykge1xuICAgICAgICAgICAgaWYgKGZvcm0gPT09IGNvbnN1bWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGFkZFRvSHR0cFBhcmFtcyhodHRwUGFyYW1zOiBIdHRwUGFyYW1zLCB2YWx1ZTogYW55LCBrZXk/OiBzdHJpbmcpOiBIdHRwUGFyYW1zIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IHRoaXMuYWRkVG9IdHRwUGFyYW1zUmVjdXJzaXZlKGh0dHBQYXJhbXMsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSB0aGlzLmFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShodHRwUGFyYW1zLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHR0cFBhcmFtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShodHRwUGFyYW1zOiBIdHRwUGFyYW1zLCB2YWx1ZTogYW55LCBrZXk/OiBzdHJpbmcpOiBIdHRwUGFyYW1zIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgKHZhbHVlIGFzIGFueVtdKS5mb3JFYWNoKCBlbGVtID0+IGh0dHBQYXJhbXMgPSB0aGlzLmFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShodHRwUGFyYW1zLCBlbGVtLCBrZXkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmFwcGVuZChrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUgYXMgRGF0ZSkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwia2V5IG1heSBub3QgYmUgbnVsbCBpZiB2YWx1ZSBpcyBEYXRlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goIGsgPT4gaHR0cFBhcmFtcyA9IHRoaXMuYWRkVG9IdHRwUGFyYW1zUmVjdXJzaXZlKFxuICAgICAgICAgICAgICAgICAgICBodHRwUGFyYW1zLCB2YWx1ZVtrXSwga2V5ICE9IG51bGwgPyBgJHtrZXl9LiR7a31gIDogaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcImtleSBtYXkgbm90IGJlIG51bGwgaWYgdmFsdWUgaXMgbm90IG9iamVjdCBvciBhcnJheVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHR0cFBhcmFtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2luZ2xlIG1lZGlhIGZpbGVcbiAgICAgKiBAcGFyYW0gd2lkdGhIZWlnaHQgRXhwZWN0ZWQgZm9ybWF0OiBXSURUSHhIRUlHSFQsIGZvciBleGFtcGxlIDc1MHgyMDAuIFdpZHRoIG9mIHRoZSBpbWFnZSwgb3IgMCB3aGVuIHRoZSBmaWxlIGlzIG5vdCBhbiBpbWFnZSBvciBpdCBzaG91bGQgaGF2ZSBvcmlnaW5hbCB1cGxvYWRlZCB3aWR0aCwgb3IgaXQgc2hvdWxkIGJlIHNjYWxlZCBwcm9wb3J0aW9uYWxseSB3aXRoIGhlaWdodCBzcGVjaWZpZWQuIEhlaWdodCBvZiB0aGUgaW1hZ2UsIG9yIDAgd2hlbiB0aGUgZmlsZSBpcyBub3QgYW4gaW1hZ2Ugb3IgaXQgc2hvdWxkIGhhdmUgb3JpZ2luYWwgdXBsb2FkZWQgaGVpZ2h0LCBvciBpdCBzaG91bGQgYmUgc2NhbGVkIHByb3BvcnRpb25hbGx5IHdpdGggd2lkdGggc3BlY2lmaWVkXG4gICAgICogQHBhcmFtIGtleSBLZXkgb2YgdGhlIGZpbGUsIGl0IGlzIG1hZGUgZnJvbSBpZCBhbmQgZXh0ZW5zaW9uLCBlLmcuIF9tZWRpYS00NTY0LmpwZyBmb3IgaW1hZ2Ugd2l0aCBpZCBfbWVkaWEtNDU2NCBhbmQganBnIGV4dGVuc2lvblxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNZWRpYSh3aWR0aEhlaWdodDogc3RyaW5nLCBrZXk6IHN0cmluZywgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiB1bmRlZmluZWR9KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHB1YmxpYyBnZXRNZWRpYSh3aWR0aEhlaWdodDogc3RyaW5nLCBrZXk6IHN0cmluZywgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbiwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+O1xuICAgIHB1YmxpYyBnZXRNZWRpYSh3aWR0aEhlaWdodDogc3RyaW5nLCBrZXk6IHN0cmluZywgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7aHR0cEhlYWRlckFjY2VwdD86IHVuZGVmaW5lZH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcbiAgICBwdWJsaWMgZ2V0TWVkaWEod2lkdGhIZWlnaHQ6IHN0cmluZywga2V5OiBzdHJpbmcsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkfSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGlmICh3aWR0aEhlaWdodCA9PT0gbnVsbCB8fCB3aWR0aEhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciB3aWR0aEhlaWdodCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldE1lZGlhLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09IG51bGwgfHwga2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGtleSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldE1lZGlhLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xuXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChIZWFkZXJBcGlLZXlBdXRoKSByZXF1aXJlZFxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXMgJiYgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFVVEgtVE9LRU5cIl0pIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BVVRILVRPS0VOJywgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFVVEgtVE9LRU5cIl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gb3B0aW9ucyAmJiBvcHRpb25zLmh0dHBIZWFkZXJBY2NlcHQ7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCByZXNwb25zZVR5cGU6ICd0ZXh0JyB8ICdqc29uJyA9ICdqc29uJztcbiAgICAgICAgaWYoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICYmIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZC5zdGFydHNXaXRoKCd0ZXh0JykpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PGFueT4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS9pbWFnZS8ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcod2lkdGhIZWlnaHQpKX0vJHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpfWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiA8YW55PnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuZHBvaW50IGZvciBtZWRpYSBmaWxlcyB1cGxvYWRcbiAgICAgKiBAcGFyYW0gZmlsZSBGaWxlIHRvIHVwbG9hZFxuICAgICAqIEBwYXJhbSB0eXBlIFR5cGUgb2YgZmlsZSBpbWFnZXxmaWxlXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgcHVibGljIHBvc3RNZWRpYShmaWxlOiBCbG9iLCB0eXBlOiBzdHJpbmcsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbiwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkfSk6IE9ic2VydmFibGU8YW55PjtcbiAgICBwdWJsaWMgcG9zdE1lZGlhKGZpbGU6IEJsb2IsIHR5cGU6IHN0cmluZywgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbiwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+O1xuICAgIHB1YmxpYyBwb3N0TWVkaWEoZmlsZTogQmxvYiwgdHlwZTogc3RyaW5nLCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbiwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xuICAgIHB1YmxpYyBwb3N0TWVkaWEoZmlsZTogQmxvYiwgdHlwZTogc3RyaW5nLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UsIG9wdGlvbnM/OiB7aHR0cEhlYWRlckFjY2VwdD86IHVuZGVmaW5lZH0pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCB8fCBmaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGZpbGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBwb3N0TWVkaWEuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciB0eXBlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgcG9zdE1lZGlhLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xuXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChIZWFkZXJBcGlLZXlBdXRoKSByZXF1aXJlZFxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXMgJiYgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFVVEgtVE9LRU5cIl0pIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BVVRILVRPS0VOJywgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFVVEgtVE9LRU5cIl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gb3B0aW9ucyAmJiBvcHRpb25zLmh0dHBIZWFkZXJBY2NlcHQ7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcbiAgICAgICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgY2FuQ29uc3VtZUZvcm0gPSB0aGlzLmNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzKTtcblxuICAgICAgICBsZXQgZm9ybVBhcmFtczogeyBhcHBlbmQocGFyYW06IHN0cmluZywgdmFsdWU6IGFueSk6IGFueTsgfTtcbiAgICAgICAgbGV0IHVzZUZvcm0gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbnZlcnRGb3JtUGFyYW1zVG9TdHJpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdXNlIEZvcm1EYXRhIHRvIHRyYW5zbWl0IGZpbGVzIHVzaW5nIGNvbnRlbnQtdHlwZSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDAwNzk2OS9hcHBsaWNhdGlvbi14LXd3dy1mb3JtLXVybGVuY29kZWQtb3ItbXVsdGlwYXJ0LWZvcm0tZGF0YVxuICAgICAgICB1c2VGb3JtID0gY2FuQ29uc3VtZUZvcm07XG4gICAgICAgIGlmICh1c2VGb3JtKSB7XG4gICAgICAgICAgICBmb3JtUGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe2VuY29kZXI6IHRoaXMuZW5jb2Rlcn0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9ybVBhcmFtcyA9IGZvcm1QYXJhbXMuYXBwZW5kKCdmaWxlJywgPGFueT5maWxlKSBhcyBhbnkgfHwgZm9ybVBhcmFtcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3JtUGFyYW1zID0gZm9ybVBhcmFtcy5hcHBlbmQoJ3R5cGUnLCA8YW55PnR5cGUpIGFzIGFueSB8fCBmb3JtUGFyYW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlVHlwZTogJ3RleHQnIHwgJ2pzb24nID0gJ2pzb24nO1xuICAgICAgICBpZihodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgJiYgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkLnN0YXJ0c1dpdGgoJ3RleHQnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PGFueT4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS9hcGkvbWVkaWFgLFxuICAgICAgICAgICAgY29udmVydEZvcm1QYXJhbXNUb1N0cmluZyA/IGZvcm1QYXJhbXMudG9TdHJpbmcoKSA6IGZvcm1QYXJhbXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiA8YW55PnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19
