import { defineComponent, h } from "vue";
import { useCore } from "@/plugins/manager/masterKey";

// Components
import Brick from "@/components/Brick.ts";

export default defineComponent({
  name: "Grid",
  components: {
    Brick
  },
  setup() {
    const core = useCore();

    return () =>
      h(
        "div",
        {
          style: {
            background: "red",
            width: "500px",
            height: "600px",
            margin: "auto"
          }
        },
        core.state.bricks.map(brick =>
          h(Brick, {
            brick
          })
        )
      );
  }
});
