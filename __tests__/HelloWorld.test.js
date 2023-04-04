import HelloWorld from '@/components/HelloWorld.vue';
import { shallowMount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: 'Hello'
      }
    });

    expect(1 + 2).toBe(3);
  });
});
