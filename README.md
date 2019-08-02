# react-desktop-notify

It is a tool used to push notifications on desktop.

## Installation

```bash
npm i react-desktop-notify
```

```bash
yarn add react-desktop-notify
```

## Usage

```python
import Notify from "react-desktop-notify"

 const notifyObject = new Notify()
 const permissionGranted = await notifyObject.requestPermission()
 if(permissionGranted){

        notifyObject
        .setTitle("123")
        .setText("Hello world ")
        .setIcon("URL")
        .show();
 }

```

## Setting event-listners

```python

//  called when click event occur on notification
notifyObject.setOnClick(callback){}

//  called when notification get closed
notifyObject.setOnClose(callback){}

//  called when notification is mounted
notifyObject.setOnShow(callback){}

//  called when error occurs in displaying notification
notifyObject.setOnError(callback){}

```

## Methods

```python

setText(text @required){
  // sets the body of the notification
}

```

```python

setTitle(text @required){
  // sets the title of the notification
}

```

```python

setBadge(URL @required){
  // sets the Badge of the notification
  // The URL of the image used to represent the notification when there is not enough space to display the notification itself.
}

```

```python

setTextDirection(direction @required){
  // sets the direction of text in the notification
  // one of type ['ltr', 'rtl']
}

```

```python

setIcon(URL @required){
  // sets the Icon of the notification

}

```

```python

setImage(URL @required){
  // sets the Image of the notification

}

```

```python

setFixed(status){
  // if true then the notification will not be get autoClosed.
  // status one of true or false

}

```

```python

setSilent(status){
   // status of type true or false
  // Specifies whether the notification should be silent — i.e., no sounds or vibrations should be issued, regardless of the device settings.
}

```

```python

setVibratePattern(pattern @required){
  // sets the vibration pattern of the notification
  // pattern of type [200,33,99]
}

```

```python

requestPermission(){
  // returns a Promise of permission being granted or not
  // true for granted else false
}

```

```python

show(){
  // display notification
  // returns notification object
}

```

```python

close(){
  // closes any active notification
}

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/mit/)
