function Notify() {
  let body = ""; // Required
  let title = ""; //  Required
  let badge = "";
  let icon = "";
  let image = "";
  let vibrate = "";

  let renotify = false;
  let dir = "auto";
  let requireInteraction = false;
  let silent = false;

  /**
   * ===========Read Only Properties=================
   */

  this.setVibratePattern = pattern => {
    if (!pattern)
      throw new Error("Vibrate pattern of notification cannot be empty");

    if (!pattern.length)
      throw new Error("Vibration pattern must be array type");
    vibrate = pattern;

    pattern.forEach(item => {
      if (typeof item !== "number")
        throw new Error("Vibration pattern must be array Of Numbers");
    });

    vibrate = pattern;

    return this;
  };

  this.setSilent = (status = false) => {
    if (typeof status !== "boolean")
      throw new Error("Silent status must be boolean type");
    silent = status;
    return this;
  };

  this.setFixed = (status = true) => {
    if (typeof status !== "boolean")
      throw new Error("AutoClose status must be boolean type");
    requireInteraction = status;
    return this;
  };

  this.setImage = (imageUrl = "") => {
    if (!imageUrl) throw new Error("Image of notification cannot be empty");
    if (typeof imageUrl !== "string")
      throw new Error("Image Url must be string type");

    image = imageUrl;
    return this;
  };

  this.setRenotify = (status = true) => {
    if (typeof status !== "boolean")
      throw new Error("Renotify status must be boolean type");
    renotify = status;
    return this;
  };

  this.setIcon = (imageUrl = "") => {
    if (!imageUrl) throw new Error("Icon of notification cannot be empty");
    if (typeof imageUrl !== "string")
      throw new Error("Icon image Url must be string type");
    icon = imageUrl;
    return this;
  };

  this.setTextDirection = (direction = "") => {
    if (!direction) throw new Error("Text direction cannot be empty");

    if (typeof direction !== "string")
      throw new Error("Text direction must be string type");

    if (direction === "ltr" || direction === "rtl") dir = direction;
    else throw new Error('Text direction must be one of type [ "ltr", "rtl" ]');

    return this;
  };

  this.setBadge = (imageUrl = "") => {
    if (!imageUrl) throw new Error("Badge of notification cannot be empty");
    if (typeof imageUrl !== "string")
      throw new Error("Badge image Url must be string type");
    badge = imageUrl;
    return this;
  };

  this.setTitle = (text = "") => {
    if (!text) throw new Error("Title of notification cannot be empty");
    if (typeof text !== "string") throw new Error("Title must be string type");

    title = text;
    return this;
  };

  this.setText = (text = "") => {
    if (!text) throw new Error("Body of notification cannot be empty");
    if (typeof text !== "string") throw new Error("Body must be string type");

    body = text;
    return this;
  };

  /**
   * ========= Event Handlers================
   */

  let onClickFunc = () => {};
  let onCloseFunc = () => {};
  let onErrorFunc = () => {};
  let onShowFunc = () => {};

  this.setOnClick = (callback = "") => {
    if (typeof callback !== "function")
      throw new Error("OnCLick must be  type Function");

    onClickFunc = callback;
    return this;
  };

  this.setOnError = (callback = "") => {
    if (typeof callback !== "function")
      throw new Error("OnError must be  type Function");

    onErrorFunc = callback;
    return this;
  };

  this.setOnClose = (callback = "") => {
    if (typeof callback !== "function")
      throw new Error("OnClose must be  type Function");

    onCloseFunc = callback;
    return this;
  };

  this.setOnShow = (callback = "") => {
    if (typeof callback !== "function")
      throw new Error("OnShow must be  type Function");

    onShowFunc = callback;
    return this;
  };

  /**
   * ============  Methods ===========
   *
   */
  //Returns a promise of permission granted or not
  this.requestPermission = () => {
    return new Promise(async (resolve, reject) => {
      const result = await Notification.requestPermission();
      if (result === "granted") resolve(true);
      else resolve(false);
    });
  };

  // Returns a notification object
  this.show = async () => {
    if (!body) throw new Error("Empty Notification text");
    if (!title) throw new Error("Empty Notification title");

    const permission = Notification.permission;
    if (permission === "granted") {
      const options = {
        body,
        badge,
        icon,
        image,
        vibrate,
        renotify,
        dir,
        requireInteraction,
        silent
      };

      const n = new Notification(title, options);
      n.addEventListener("click", onClickFunc);
      n.addEventListener("close", onCloseFunc);
      n.addEventListener("error", onErrorFunc);
      n.addEventListener("show", onShowFunc);
      return n;
    }
  };
}

module.exports = Notify;
