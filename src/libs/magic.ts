import { Magic } from "magic-sdk"

// Initialize the Magic instance
export const magic = new Magic("pk_live_FA40889C53391EA0", {
  network: {
   // You can change the rpc url to any network rpc
    rpcUrl: 'https://rpc-amoy.polygon.technology/', 
    chainId: 80002,
  },
})