<script>
import store from "../../store";
import _ from "lodash";

export default {
  methods: {
    $can(permissions) {
      const Permissions = store.getters.getPermissions;

      if (_.size(Permissions)) {
        if (Array.isArray(permissions)) {
          let flag = false;
          _.map(permissions, (permission) => {
            if (Permissions.indexOf(permission) !== -1) {
              flag = true;
            }
          });
          return flag;
        } else {
          return Permissions.indexOf(permissions) !== -1;
        }
      }
      return false;
    },
  },
};
</script>
