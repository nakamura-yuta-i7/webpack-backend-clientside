import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

declare var require
var template = require("raw!./hero-detail.component.html")
var style = require("raw!./hero-detail.component.style")

@Component({
  selector: 'my-hero-detail',
  template: template,
  styles: [ style ],
  // templateUrl: 'app/hero-detail.component.html',
  // styleUrls: ['app/hero-detail.component.css'],
  inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
