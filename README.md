# elm make parallell issue

This demonstrates a issue with `elm make` when building in parallell and there are type errors.

I changed one of the constructors of the custom type `Model` in `Main.elm` from `Editor (Maybe Slug) Editor.Model` to `Editor Slug Editor.Model`.

Running `npm run make` will build the same code in 100 threads. One or more will fail with:

```
elm: not enough bytes
CallStack (from HasCallStack):
 error, called at libraries/binary/src/Data/Binary.hs:212:21 in binary-0.8.5.1:Data.Binary
```
