import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as imagepicker from "nativescript-imagepicker";
import * as camera from "nativescript-camera";
import { Image } from "@nativescript/core/ui/image";

@Component({
  selector: 'app-file-upload-mobile',
  templateUrl: './file-upload.component.tns.html',
  styleUrls: ['./file-upload.component.tns.css']
})
export class FileUploadComponent implements OnInit {
  @Output() getUploadedImage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  uploadFromGallery() {
    let context = imagepicker.create({
      mode: 'single',
      mediaType: imagepicker.ImagePickerMediaType.Image
    });
    const THIS = this;
    context
      .authorize()
      .then(function () {
        return context.present();
      })
      .then(function (selection) {
        //console.log('========uploadFromGallery==========', JSON.stringify(selection));
        var image = new Image();
        image.src = selection[0];
        THIS.getUploadedImage.emit(image);
        // selection.forEach(function (imageAsset) {
        //   console.log('imageAsset', imageAsset);
        //   var image = new Image();
        //   image.src = imageAsset;
        //   this.getUploadedImage.emit(image);
        // });
      }).catch(function (e) {
        // process error
      });
  }

  uploadFromCamera() {
    const options = {
      width: 150,
      height: 150,
      keepAspectRatio: true,
      saveToGallery: false,
      allowsEditing: true
    };
    camera.takePicture(options)
      .then((imageAsset) => {
        //console.log('========uploadFromCamera==========', JSON.stringify(imageAsset));
        var image = new Image();
        image.src = imageAsset;
        this.getUploadedImage.emit(image);

        // console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        // console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
        // console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
      }).catch((err) => {
        console.log("Error -> " + err.message);
      });
  }

}
