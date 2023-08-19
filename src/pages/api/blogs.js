import products from '../../../public/data/base.json';

export default function Blogsss(req, res) {
  res.status(200).json(products)
return ( <>
  {products.map((product) => (
    <Link key={product.id} href={`/products/${product.id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            width={1000}
            height={1000}
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {product.color}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  ))}
  </>)
}

export async function getStaticProps() {
    const filePath = path.join(
      process.cwd(),
      "public",
      "static",
      "data",
      "base.json"
    );
    const data = fs.readFileSync(filePath);
    const products = JSON.parse(data);
    return {
      props: {
        products,
      },
    };
  }
