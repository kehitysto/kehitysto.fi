#!/bin/bash
set -e

export NAME="kehitysto-web"
export S3D="s3://$NAME"
export REGION="eu-north-1"

aws --region "$REGION" cloudformation deploy \
  --stack-name "$NAME" \
  --template cfn-stack.yml \
  --parameter-overrides \
    WebBucketName="${NAME}" \
    DomainName="kehitysto.fi" \
    DomainCertificateARN="arn:aws:acm:us-east-1:037853750628:certificate/f7456874-f8c2-4e38-84d4-7a8c67a2f6e4"

npx next build
npx next export

aws --region "$REGION" s3 sync \
  --delete \
  out/ $S3D/

