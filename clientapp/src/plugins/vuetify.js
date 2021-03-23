import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: colors.deepPurple.base,
                secondary: colors.blue.base,
                accent: colors.lightBlue.base,
                error: colors.pink.base,
                warning: colors.amber.base,
                info: colors.teal.base,
                success: colors.green.base
            },
        },
    },
});
