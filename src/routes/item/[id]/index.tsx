import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
  useLocation,
} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

type ProductData = {
  data: string;
};
type EndpointData = ProductData | null;

export default component$(() => {
  const location = useLocation();
  const productData = useEndpoint<ProductData>();
  console.log(`params`, location.params);
  return (
    <div>
      wow, so dynamic
      <br />
      <span>id: {location.params.id}</span>
      <Resource
        value={productData}
        onPending={() => <div>Loading</div>}
        onResolved={(data) => <div>hello from {data.data}</div>}
        onRejected={(e) => <>Error: {e}</>}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};

export const onGet: RequestHandler<ProductData> = async ({ params }) => {
  // put your DB access here, we are hard coding a response for simplicity.
  return {
    data: `yolo ${params.id}`,
  };
};
export const onPut: RequestHandler<EndpointData> = async ({
  url,
  params,
  request,
  response,
}) => {
  // put your DB access here (hard coding a response for the simplicity)

  // read data from request and perform DB update.
  // console.log(params.skuId);
  // console.log(request.method);
  // console.log(url.pathname);

  // set response headers
  response.headers.append("Cache-Control", " public, max-age=86400");

  // return data to be access from `useEndpoint()`
  return {
    data: `yolo ${params.id}`,
  };
};
