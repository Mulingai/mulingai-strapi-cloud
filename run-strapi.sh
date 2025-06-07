#!/usr/bin/env bash
# in case of permission denied run the code below in terminal to allow using the script
# chmod +x run-strapi.sh 
# If we’re on macOS (Darwin), bump Node’s heap to 4 GB
if [[ "$(uname -s)" == "Darwin" ]]; then
  export NODE_OPTIONS="--max-old-space-size=4096"
fi

# Start Strapi exactly the same way your npm script does
cross-env DEBUG=knex:query,strapi:reload strapi develop --no-watch-admin

