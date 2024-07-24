// tests/CategoryCard.spec.js
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CategoryCard from '@/components/CategoryCard.vue';
import VueRouter from 'vue-router';

// Create a local Vue instance with Vue Router
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

// Mock the timeAgo filter
localVue.filter('timeAgo', (value) => {
  return value ? 'a few seconds ago' : '';
});

describe('CategoryCard.vue', () => {
  const category = {
    id: 1,
    icon: 'book',
    title: 'Books',
    totalArticle: 20,
    updatedOn: new Date()
  };

  it('renders category data correctly', () => {
    const wrapper = shallowMount(CategoryCard, {
      localVue,
      router,
      propsData: { category }
    });

    expect(wrapper.find('h2').text()).toBe(category.title);
    expect(wrapper.find('.icon i').classes()).toContain('fa-book');
    expect(wrapper.find('.text-green').text()).toBe(`${category.totalArticle} articles`);
    expect(wrapper.find('.text-small').text()).toContain('a few seconds ago');
  });

  it('renders correct router-link', () => {
    const wrapper = shallowMount(CategoryCard, {
      localVue,
      router,
      propsData: { category }
    });

    const routerLink = wrapper.findComponent({ name: 'RouterLink' });
    expect(routerLink.exists()).toBe(true);
    expect(routerLink.props().to).toBe(`/category/${category.id}`);
  });
});
