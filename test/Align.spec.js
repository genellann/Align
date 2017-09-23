/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/JSDisplayObjectAlignment
 */

/* global describe, it, before */

import chai from "chai";
import Align from "../src/Align.js";

chai.expect();

const expect = chai.expect;

describe("Align", function () {
  describe("#alignX", function () {
    it("if CENTER, should return a value half the parent's width minus the half the child's width +/- padding", function () {
      expect(Align.alignX(20, 10, Align.CENTER)).to.equal(5);
      expect(Align.alignX(20, 10, Align.CENTER, 2)).to.equal(7);
      expect(Align.alignX(20, 10, Align.CENTER, -2)).to.equal(3);
      expect(Align.alignX(10, 20, Align.CENTER)).to.equal(-5);
      expect(Align.alignX(10, 20, Align.CENTER, 2)).to.equal(-3);
      expect(Align.alignX(10, 20, Align.CENTER, -2)).to.equal(-7);
    });

    it("if LEFT, should return a value equal to padding", function () {
      expect(Align.alignX(20, 10, Align.LEFT)).to.equal(0);
      expect(Align.alignX(20, 10, Align.LEFT, 2)).to.equal(2);
      expect(Align.alignX(10, 20, Align.LEFT)).to.equal(0);
      expect(Align.alignX(10, 20, Align.LEFT, 2)).to.equal(2);
    });

    it("if RIGHT and parent's width is larger than child's width, should return a value half the parent's width minus padding", function () {
      expect(Align.alignX(20, 10, Align.RIGHT)).to.equal(10);
      expect(Align.alignX(20, 10, Align.RIGHT, 2)).to.equal(8);
    });

    it("if RIGHT and parent's width is less than child's width, should return a negative value of half the child's width minus padding", function () {
      expect(Align.alignX(10, 20, Align.RIGHT)).to.equal(-10);
      expect(Align.alignX(10, 20, Align.RIGHT, 2)).to.equal(-12);
    });
  });

  describe("#alignY", function () {
    it("if CENTER, should return a value half the parent's height minus the half the child's height +/- padding", function () {
      expect(Align.alignY(20, 10, Align.CENTER)).to.equal(5);
      expect(Align.alignY(20, 10, Align.CENTER, 2)).to.equal(7);
      expect(Align.alignY(20, 10, Align.CENTER, -2)).to.equal(3);
      expect(Align.alignY(10, 20, Align.CENTER)).to.equal(-5);
      expect(Align.alignY(10, 20, Align.CENTER, 2)).to.equal(-3);
      expect(Align.alignY(10, 20, Align.CENTER, -2)).to.equal(-7);
    });

    it("if TOP, should return a value equal to padding", function () {
      expect(Align.alignY(20, 10, Align.TOP)).to.equal(0);
      expect(Align.alignY(20, 10, Align.TOP, 2)).to.equal(2);
      expect(Align.alignY(10, 20, Align.TOP)).to.equal(0);
      expect(Align.alignY(10, 20, Align.TOP, 2)).to.equal(2);
    });

    it("if BOTTOM and parent's height is larger than child's height, should return a value half the parent's height minus padding", function () {
      expect(Align.alignY(20, 10, Align.BOTTOM)).to.equal(10);
      expect(Align.alignY(20, 10, Align.BOTTOM, 2)).to.equal(8);
    });

    it("if BOTTOM and parent's height is less than child's height, should return a negative value of half the child's height minus padding", function () {
      expect(Align.alignY(10, 20, Align.BOTTOM)).to.equal(-10);
      expect(Align.alignY(10, 20, Align.BOTTOM, 2)).to.equal(-12);
    });
  });
});
