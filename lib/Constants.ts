import { Buffer } from 'buffer';
import Key from "./Key";

export default class Constants {
  public static readonly COINBASE_KEY = Key.importEncodedPrivateKey(Buffer.from(
    "302e020100300506032b657004220420d22f93f26b46a804154e4925f2fa33368f9f0332105729c6a44af3278ca0da84",
    "hex",
  ));

  public static readonly DEVNET_KEY = Key.importEncodedPrivateKey(Buffer.from(
    "302e020100300506032b657004220420973315f6d25626626965abed804139b41b6610410c3e5023ae1a46b3016d48be",
    "hex",
  ));
}
