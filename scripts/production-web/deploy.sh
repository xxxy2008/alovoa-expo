#!/bin/bash
set -ex

CERT_PATH="/opt/alovoa/alovoa.pfx"
PORT=10081

cd ../..
fuser -k $PORT/tcp
yarn serve dist --single -l $PORT --ssl-cert $CERT_PATH --ssl-pass "ssl-key" -c "../serve.json"
