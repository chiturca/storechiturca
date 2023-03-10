import { useNavigate } from "react-router-dom";
import { Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ProductsCard } from "../components";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Page narrowWidth>
      <TitleBar
        title="Store Chiturca"
        primaryAction={{
          content: "Sign Up",
          onAction: () => navigate("/signup"),
        }}
        secondaryActions={[
          {
            content: "Sign In",
            onAction: () => navigate("/signin"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
