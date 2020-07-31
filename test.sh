#!/usr/bin/env bash

function cleanup() {
  if [[ -n "${TEST_APP}" ]]; then
    >&2 echo "Stopping ${TEST_APP}"
    kill -9 ${TEST_APP}
  fi
  exit
}

trap cleanup INT TERM

npm run webdriver-manager-update

npm run start &
TEST_APP=$!
sleep 2

while [[ true ]]; do
  npm run test
  read -p "Press enter to re-run"
  echo ""
done