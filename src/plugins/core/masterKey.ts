import { InjectionKey, inject } from "vue";
import { Core } from "./core";

export const masterKey: InjectionKey<Core> = Symbol("Lambda key");

export const useCore = (injectKey?: InjectionKey<Core>): Core => {
  return <Core>inject(injectKey ?? masterKey);
};
