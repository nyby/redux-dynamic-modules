import thunk from "redux-thunk";
import { IExtension } from "@nyby/redux-dynamic-modules-core";

export function getThunkExtension(): IExtension {
    return {
        middleware: [thunk],
    };
}
