<template>
  <q-page padding>
    <div>
      <div class="row justify-center">
        <div>
          <h2 style="font-family: 'Frijole', cursive; color:#43A047"> GUMBY </h2>
        </div>
      </div>
      <div class="row justify-center">
        <div>
          <img alt="GUMBY logo" src="~assets/gumby-logo-full.svg" style="width: 150px; height: 150px;">
        </div>
      </div>
      <div class="row justify-center">
        <h4 style="font-family: 'Frijole', cursive; color:#43A047"> Grow Outdoors </h4>
      </div>
      <div class="row justify-center">
        <div class="q-pa-md">
          <q-card style="width: 100%; max-width: 500px;">
            <q-parallax
              src="../statics/img/PersonalGrowth.png"
              :height="300"
            />
            <q-card-section>
              <div class="text-h6">Personal Growth - We are all gumbys!</div>
              <div class="text-subtitle2">Gumby is passionate about making your climbing goals a reality! Whether you have just started or are going for that next 5.14 we are here to support you.</div>
            </q-card-section>

            <q-tabs v-model="personalTab" class="primary">
              <q-tab label="Fresh" name="one" />
              <q-tab label="Experienced" name="three" />
              <q-tab label="Leaders" name="ten" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="personalTab" animated>
              <q-tab-panel name="one">
                If you are just starting out, there is so much to learn. Start by logging your climbs at the gym, then let Gumby guide you the rest of the way!
              </q-tab-panel>

              <q-tab-panel name="three">
                Ready to try bigger challenges outdoors? Ready to hone those outdoor skills? Gumby is here to find your mentor and make your learning safe.
              </q-tab-panel>

              <q-tab-panel name="ten">
                Want to give back to the community? Are you setting routes that nobody knows about? Let Gumby know and we can spread the word. Become a leader in the community!
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
        <div class="q-pa-md">
          <q-card style="width: 100%; max-width: 500px;">
            <q-parallax
              src="../statics/img/CommunityGrowth.png"
              :height="300"
            />
            <q-card-section>
              <div class="text-h6">Community Growth - Be a hero!</div>
              <div class="text-subtitle2">With the rapid growth of climbing, Gumby is passionate about ensuring climbing remains about the rock and nature! We are a community of heroes that give back to our rock climbing and those who maintain it!</div>
            </q-card-section>

            <q-tabs v-model="communityTab" class="primary">
              <q-tab label="Stewardship" name="one" />
              <q-tab label="Safety" name="two" />
              <q-tab label="Mentorship" name="three" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="communityTab" animated>
              <q-tab-panel name="one">
                It is up to our community to ensure crags and gyms are places to be maintained and protected.
              </q-tab-panel>

              <q-tab-panel name="two">
                Bolts and gear need replacement and new climbers need mentorship.
              </q-tab-panel>

              <q-tab-panel name="three">
                Looking for experienced climbers to help!
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      personalTab: 'one',
      communityTab: 'one'
    }
  }
}
</script>
