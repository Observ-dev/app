import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

const certArn =
  "arn:aws:acm:us-east-1:278637843425:certificate/ad860e1b-e229-43c9-b030-49828dba74c7";

export default {
  config(_input) {
    return {
      name: "observ-app",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: "app.observ.dev",
          hostedZone: "observ.dev",
          cdk: {
            certificate: Certificate.fromCertificateArn(
              stack,
              "MyCert",
              certArn
            ),
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
