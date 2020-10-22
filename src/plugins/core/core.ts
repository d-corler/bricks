import { App, InjectionKey, reactive, readonly } from "vue";
import { masterKey } from "./masterKey";
import { v4 } from "uuid";

type Options = unknown;

export interface Brick {
  id: string;
  position: [number, number];
}

export interface State {
  bricks: Brick[];
}

export const createCore = (options?: Partial<Options>) => new Core(options);

export class Core {
  private readonly _options;
  private readonly _state: State;

  constructor(options: Partial<Options> = {}) {
    this._options = options;

    this._state = reactive({
      bricks: [
        {
          id: v4(),
          position: [0, 0],
        },
        {
          id: v4(),
          position: [2, 2],
        },
      ],
    });
  }

  public install(app: App, injectKey?: InjectionKey<Core>) {
    console.log("🚀 Core injected");
    app.provide(injectKey ?? masterKey, this);
    app.config.globalProperties.$store = this;
  }

  public get state() {
    return readonly(this._state);
  }
}
