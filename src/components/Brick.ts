import { defineComponent, h, onMounted, PropType } from "vue";

import { Brick } from "@/plugins/core/core";

export default defineComponent({
  name: "Brick",
  props: {
    brick: {
      type: Object as PropType<Brick>,
      required: true
    }
  },
  setup(props) {
    onMounted(() => {
      console.log("MOUNTED");
    });

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
        props.brick.id
      );
  }
});
