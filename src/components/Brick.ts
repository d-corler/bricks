import { defineComponent, h } from "vue";

import { Brick } from "@/plugins/manager/core";

export default defineComponent({
  name: "Brick",
  props: {
    brick: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return () =>
      h(
        "div",
        {
          style: {
            background: "blue",
            width: "10px",
            height: "10px"
          }
        },
        (props.brick as Brick).id
      );
  }
});
