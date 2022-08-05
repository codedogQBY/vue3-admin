import { MessageApi } from 'ant-design-vue/lib/message';
import { ModalFunc } from 'ant-design-vue/lib/modal/Modal';
import { DefineComponent } from 'vue';
import { UserRes } from '../api/system/user';
declare global {
  module System {}
  module Common {
    export interface Router {
      path: string;
      name: string | number;
      component?: VueComponent;
      meta: {
        title: string;
        icon: string | undefined;
        hiddenHeaderContent: boolean | undefined;
        permission: unknown;
        type: unknown;
        actions: UserRes.GetUserMenu[];
      };
      hidden: boolean;
      hideChildrenInMenu: boolean;
      redirect: string | undefined;
      children: Router[];
    }

    export type VueComponent = DefineComponent<{}, {}, any>;

    export type OptionValue = string | number;
    export interface Option {
      label: string;
      value: OptionValue;
      children?: Option[];
      [prop: string]: unknown;
    }

    export type Fun<T = unknown, Ret = void> = (...args: T[]) => Ret;
  }

  module LowCode {
    // export interface ComponentField extends Common.Option {
    // }
  }
}

declare module '@vue/runtime-core' {
  // 定义绑定在全局vue示例上的变量
  interface ComponentCustomProperties {
    $message: MessageApi;
    $confirm: ModalFunc;
  }
}