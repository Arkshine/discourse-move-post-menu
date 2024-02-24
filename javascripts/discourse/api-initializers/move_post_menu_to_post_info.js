import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.8.0", (api) => {
  api.decorateWidget("post-meta-data:after", (helper) => {
    return helper.attach("post-menu", helper.widget.model);
  });

  api.reopenWidget("post-contents", {
    html(attrs, state) {
      const html = this._super(attrs, state);

      return html.filter((item) => {
        return !item?.key || !item.key.startsWith("post-menu-");
      });
    },
  });
});
