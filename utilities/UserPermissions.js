import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { PermissionsAndroid } from "react-native";

class UserPermissions {
  getPhotoPermission = async () => {
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status != "granted") {
        alert("We need permission to access your camera ");
      }
    }
  };
}

export default new UserPermissions();
