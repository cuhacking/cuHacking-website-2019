import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Countdown from '@/components/Countdown.vue';

describe('Countdown.vue', () => {
  it('renders props.msg when passed', () => {
    const date = 'January 1, 2020';
    const wrapper = shallowMount(Countdown, {
      propsData: { date },
    });

    expect(wrapper.text()).to.include('Days');
    expect(wrapper.text()).to.include('Hours');
    expect(wrapper.text()).to.include('Minutes');
    expect(wrapper.text()).to.include('Seconds');
  });
});
