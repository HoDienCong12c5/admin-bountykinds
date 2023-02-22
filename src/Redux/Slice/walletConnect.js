import { createSlice } from '@reduxjs/toolkit';
import { CONNECTED_CHAIN } from 'constants/web3';
import { SLICES } from 'src/constants/index';

const initialState = CONNECTED_CHAIN.bnb;

const connectedChainSlice = createSlice( {
  name: SLICES.connectedChain,
  initialState,
  reducers: {
    setConnectedChain: ( state, action ) => {
      return action.payload;
    }
  }
} );

export const { setConnectedChain } = connectedChainSlice.actions;

export default connectedChainSlice.reducer;