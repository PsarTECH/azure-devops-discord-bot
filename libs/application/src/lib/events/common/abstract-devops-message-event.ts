import { DevopsMessage } from '@psartech/models';

export abstract class AbstractDevopsMessageEvent<T = any> {
  constructor(public readonly devOpsMessage: DevopsMessage<T>) {}
}
