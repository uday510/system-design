1. start server
2. At client side: MODE=stream NAME=Uday0 node client.js
3. At client side: MODE=poll NAME=Uday1 node client.js
4. (for i in `seq 1 10000`; do sleep 1; echo $i; done) | NAME=Bot node client.js

