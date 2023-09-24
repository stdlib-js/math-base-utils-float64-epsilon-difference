<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Epsilon Difference

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [relative difference][@stdlib/math/base/utils/relative-difference] of two real numbers in units of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].



<section class="usage">

## Usage

```javascript
import epsdiff from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-utils-float64-epsilon-difference@deno/mod.js';
```

#### epsdiff( x, y\[, scale] )

Computes the [relative difference][@stdlib/math/base/utils/relative-difference] of two real numbers in units of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].

```javascript
var d = epsdiff( 12.15, 12.149999999999999 ); // => ~0.658ε
// returns ~0.658
```

The following [`scale`][@stdlib/math/base/utils/relative-difference] functions are supported:

-   **max-abs**: maximum [absolute value][@stdlib/math/base/special/abs] of `x` and `y` (_default_).
-   **max**: maximum value of `x` and `y`.
-   **min-abs**: minimum [absolute value][@stdlib/math/base/special/abs] of `x` and `y`.
-   **min**: minimum value of `x` and `y`.
-   **mean-abs**: arithmetic mean of the [absolute values][@stdlib/math/base/special/abs] of `x` and `y`.
-   **mean**: arithmetic mean of `x` and `y`.
-   **x**: `x` (_noncommutative_).
-   **y**: `y` (_noncommutative_).

By default, the function scales the [absolute difference][@stdlib/math/base/utils/absolute-difference] by dividing the [absolute difference][@stdlib/math/base/utils/absolute-difference] by the maximum [absolute value][@stdlib/math/base/special/abs] of `x` and `y`. To scale by a different function, specify a scale function name.

```javascript
var d = epsdiff( 2.4341309458983933, 2.4341309458633909, 'mean-abs' ); // => ~64761.5ε => ~1.438e-11
// returns ~64761.5
```

To use a custom scale function, provide a `function` which accepts two numeric arguments `x` and `y`.

```javascript
function scale( x, y ) {
    // Return the minimum value:
    return ( x > y ) ? y : x;
}

var d = epsdiff( 1.0000000000000002, 1.0000000000000100, scale ); // => ~44ε
// returns ~44
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If computing the [relative difference][@stdlib/math/base/utils/relative-difference] in units of [epsilon][@stdlib/constants/float64/eps] will result in overflow, the function returns the [maximum double-precision floating-point number][@stdlib/constants/float64/max].

    ```javascript
    var d = epsdiff( 1.0e304, 1.0, 'min' ); // => ~1.798e308ε => 1.0e304/ε overflows
    // returns ~1.798e308
    ```

-   If the [absolute difference][@stdlib/math/base/utils/absolute-difference] of `x` and `y` is `0`, the [relative difference][@stdlib/math/base/utils/relative-difference] is **always** `0`.

    ```javascript
    var d = epsdiff( 0.0, 0.0 );
    // returns 0.0

    d = epsdiff( 3.14, 3.14 );
    // returns 0.0
    ```

-   If `x = y = +infinity` or `x = y = -infinity`, the function returns `NaN`.

    ```javascript
    import PINF from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@deno/mod.js';
    import NINF from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@deno/mod.js';

    var d = epsdiff( PINF, PINF );
    // returns NaN

    d = epsdiff( NINF, NINF );
    // returns NaN
    ```

-   If `x = -y = +infinity` or `-x = y = +infinity`, the [relative difference][@stdlib/math/base/utils/relative-difference] is `+infinity`.

    ```javascript
    import PINF from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@deno/mod.js';
    import NINF from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@deno/mod.js';

    var d = epsdiff( PINF, NINF );
    // returns Infinity

    d = epsdiff( NINF, PINF );
    // returns Infinity
    ```

-   If a `scale` function returns `0`, the function returns `NaN`.

    ```javascript
    var d = epsdiff( -1.0, 1.0, 'mean' ); // => |2/0|
    // returns NaN
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@deno/mod.js';
import epsdiff from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-utils-float64-epsilon-difference@deno/mod.js';

var sign;
var x;
var y;
var d;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu();
    sign = ( randu() > 0.5 ) ? 1.0 : -1.0;
    y = x + ( sign*EPS*i );
    d = epsdiff( x, y );
    console.log( 'x = %d. y = %d. d = %dε.', x, y, d );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/utils/absolute-difference`][@stdlib/math/base/utils/absolute-difference]</span><span class="delimiter">: </span><span class="description">compute the absolute difference of two real numbers.</span>
-   <span class="package-name">[`@stdlib/math-base/utils/relative-difference`][@stdlib/math/base/utils/relative-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-utils-float64-epsilon-difference.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-utils-float64-epsilon-difference

[test-image]: https://github.com/stdlib-js/math-base-utils-float64-epsilon-difference/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-utils-float64-epsilon-difference/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-utils-float64-epsilon-difference/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-utils-float64-epsilon-difference?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-utils-float64-epsilon-difference.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-utils-float64-epsilon-difference/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-utils-float64-epsilon-difference/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-utils-float64-epsilon-difference/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-utils-float64-epsilon-difference/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-utils-float64-epsilon-difference/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-utils-float64-epsilon-difference/main/LICENSE

[@stdlib/constants/float64/eps]: https://github.com/stdlib-js/constants-float64-eps/tree/deno

[@stdlib/constants/float64/max]: https://github.com/stdlib-js/constants-float64-max/tree/deno

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math-base-special-abs/tree/deno

<!-- <related-links> -->

[@stdlib/math/base/utils/absolute-difference]: https://github.com/stdlib-js/math-base-utils-absolute-difference/tree/deno

[@stdlib/math/base/utils/relative-difference]: https://github.com/stdlib-js/math-base-utils-relative-difference/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
