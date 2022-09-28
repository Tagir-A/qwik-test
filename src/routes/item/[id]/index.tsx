import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
  useLocation,
} from "@builder.io/qwik-city";

type ProductData = {
  data: string;
};

export default component$(() => {
  const location = useLocation();
  const productData = useEndpoint<typeof onGet>();

  if (productData.state === "resolved" && !productData.resolved) {
    console.log("yolo", productData);
    // Early return for 404
    return <div>404: Product not found!!!</div>;
  }

  return (
    <div>
      wow, so dynamic
      <br />
      <span>id: {location.params.id}</span>
      <Resource
        value={productData}
        onPending={() => <div>Loading</div>}
        onResolved={(data) => <div>hello from {data?.data}</div>}
        onRejected={(e) => <>Error: {e}</>}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};

export const onGet: RequestHandler<ProductData> = async ({
  request,
  response,
  params,
}) => {
  const isAuth = getAuthState();
  if (!isAuth) {
    throw response.redirect("/welcome");
  }
  const product = await fetchProduct();

  if (!product) {
    console.log("yo mmmann");

    response.status = 404;
    return null;
  }
  console.log("brrra");
  // put your DB access here, we are hard coding a response for simplicity.
  return {
    data: `yolo ${product.data}`,
  };
};

function getAuthState() {
  return true;
}
const fetchProduct = (): Promise<ProductData | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(null),
      // reject(new Error("boom")),
      Math.random() * 1000
    );
  });
};
