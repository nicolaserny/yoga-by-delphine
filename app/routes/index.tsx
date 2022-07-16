import { BlurrableImage } from "~/components/BlurrableImage";
import { getImageBuilder, getImgProps } from "~/images";

export default function Index() {
  return (
    <>
      <h1>Test2</h1>;
      <main>
        <BlurrableImage
          blurDataUrl="data:image/jpeg;base64,UklGRhADAABXRUJQVlA4WAoAAAAgAAAAYwAAQgAASUNDUAwCAAAAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD//1ZQOCDeAAAAMAoAnQEqZABDAD65UKJKODmqoa+ZaqswFwlpATyCyOxVomEnEHE4cHyu1S/rd0dHpRWxVrnVrF0E3VGz+cGGZWaQFa5Q/gr+C9I41I7NMqRwVROxWFoGK4BIAP7zP+nTKi0D13FsaEp9gTzYEqcjIL7YzTnL4J/GH/I5voQRo4C6W6h+fe0aF72fBRXrbScj0h4dwj88+fXhLBBYvjcmYHAoHgB8RAP/xIeUTIdGrUHYTP/AqIAOX3zQvgtLD3kaCcEuFkcucoGy65DN1+2k/Iix+eBixIg0b9PYAAAA"
          className="aspect-h-2 aspect-w-5 w-1/2"
          img={
            <img
              title="Test"
              className="rounded-lg object-cover object-center"
              {...getImgProps(
                getImageBuilder("yoga-by-delphine/course-2.jpg", "course-2"),
                {
                  widths: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
                  sizes: ["50vw"],
                },
              )}
            />
          }
        />
      </main>
    </>
  );
}
