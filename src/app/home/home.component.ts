import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dummyData:object =[
    {
      ytKey:'OHEq66qVbjU',
      thumbnailUrl: 'https://i.ytimg.com/vi/OHEq66qVbjU/hqdefault.jpg'
    },
    {
      ytKey:'_dkaZiRqgz8',
      thumbnailUrl: 'https://i.ytimg.com/vi/_dkaZiRqgz8/hqdefault.jpg'
    },
    {
      ytKey:'JvtdB8AkANo',
      thumbnailUrl: 'https://i.ytimg.com/vi/JvtdB8AkANo/hqdefault.jpg'
    },
    {
      ytKey:'UpT-SAunuLk',
      thumbnailUrl: 'https://i.ytimg.com/vi/UpT-SAunuLk/hqdefault.jpg'
    },
    {
      ytKey:'6EaGYmiAiIo',
      thumbnailUrl: 'https://i.ytimg.com/vi/6EaGYmiAiIo/hqdefault.jpg'
    },
    {
      ytKey:'lr0NFyD0Nzw',
      thumbnailUrl: 'https://i.ytimg.com/vi/lr0NFyD0Nzw/hqdefault.jpg'
    },
    {
      ytKey:'eqBAOX6Qegk',
      thumbnailUrl: 'https://i.ytimg.com/vi/eqBAOX6Qegk/hqdefault.jpg'
    },
    {
      ytKey:'I3PQe2V6py4',
      thumbnailUrl: 'https://i.ytimg.com/vi/I3PQe2V6py4/hqdefault.jpg'
    },
    {
      ytKey:'Z_t7Fx9xvGs',
      thumbnailUrl: 'https://i.ytimg.com/vi/Z_t7Fx9xvGs/hqdefault.jpg'
    }
  ]

  constructor(public mdDialog: MdDialog) { }

  ngOnInit() {
  }

  getDialogHeight(){
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return w*0.8*9/16;
  }
  getYtSize(){

    let w = window.innerWidth*0.8;
    let h = w/16*9;
    console.log({w:w,h:h});
    return {
      w: w,
      h: h
    };
  }

  openDialog(data): void {
    let h = (this.getDialogHeight()).toString();
    let ytSize = this.getYtSize();
    let dialogRef = this.mdDialog.open(Dialog, {
      width: '80vw',
      height: h+'px',
      data: {
        ytKey: data.ytKey,
        ytSize: ytSize
      }
    });

    $(".mat-dialog-container").css('padding','0');

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog',
  templateUrl: 'dialog.html',
  // styleUrls: ['dialog.scss']
})
export class Dialog {

  constructor(
    public dialogRef: MdDialogRef<Dialog>,
    @Inject(MD_DIALOG_DATA) public data: any) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  player: YT.Player;
  private id: string = this.data.ytKey;
  width: number = this.data.ytSize.w;
  height: number = this.data.ytSize.h;

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
    this.player.playVideo();
  }
  onStateChange(event){
    console.log('player state', event.data);
  }

}
