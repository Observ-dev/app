import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "observ-app",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      // const site = new NextjsSite(stack, "site",{
      //   customDomain: {
      //     domainName:"app.observ.dev",
      //     hostedZone: "observ.dev",
      //   }
      // });
      const site = new NextjsSite(stack, "site");

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
