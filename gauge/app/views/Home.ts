import { getExamples } from '../examples';

export default {
  name: 'Home',
  template: `
  <Page>
    <ActionBar title="Gauge Vue">
    </ActionBar>
      <ListView for="example in examples"
                separatorColor="transparent"
                @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="example.description" class="titleLabel"></Label>
            <StackLayout height="1" backgroundColor="#EEEEEE"></StackLayout>
          </StackLayout>
        </v-template>
      </ListView>
  </Page>
  `,
  data () {
    return {
      examples: getExamples(),
    };
  },
  methods: {
    goToExample ({ item }) {
      this.$navigateTo(item);
    },
  }
};
