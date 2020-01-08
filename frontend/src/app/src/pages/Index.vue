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
        <h4 style="font-family: 'Frijole', cursive; color:#43A047"> Climbing for everyone </h4>
      </div>
      <div class="row justify-center">
        <div class="q-pa-md">
          <q-card style="width: 100%; max-width: 500px;">
            <q-parallax
              src="../statics/img/PersonalGrowth.png"
              :height="300"
            />
            <q-card-section>
              <div class="text-h6">Your Climbing</div>
              <div class="text-subtitle2">Gumby is a community of climbers all working hard to take their climbing to the next level. Gumby is here to make that as easy as ever whether you are on your first climb or your 100th project!</div>
            </q-card-section>

            <q-tabs v-model="personalTab" class="primary">
              <q-tab label="Track" name="journal" />
              <q-tab label="Grow" name="you" />
              <q-tab label="Achieve" name="routes" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="personalTab" animated>
              <q-tab-panel name="journal">
                Start tracking all of your climbs in the <router-link to="/journal">Journal</router-link> section of the app.
              </q-tab-panel>

              <q-tab-panel name="you">
                See where you are and plan out your future goals in the <router-link to="/you">You</router-link> section of the app.
              </q-tab-panel>

              <q-tab-panel name="routes">
                Gumby will provide recommendations for your next <router-link to="/routes">Route</router-link> based on your <router-link to="/journal">Journal</router-link> history and <router-link to="/you">You</router-link> preferences so you can get the most out of every session.
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
              <div class="text-h6">Your Community</div>
              <div class="text-subtitle2">Gumby is a community of climbers working to keep climbing safe and accessible for people of all backgrounds.</div>
            </q-card-section>

            <q-tabs v-model="communityTab" class="primary">
              <q-tab label="Meet" name="meet" />
              <q-tab label="Support" name="donate" />
              <q-tab label="Lead" name="you" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="communityTab" animated>
              <q-tab-panel name="meet">
                Find other climbers with your aspirations in the <router-link to="\meet">Meet</router-link> section!
              </q-tab-panel>

              <q-tab-panel name="donate">
                Interested in helping support this community, local crags, or climbing in general? Visit the <router-link to="\donate">Donate</router-link> section to see how you can help.
              </q-tab-panel>

              <q-tab-panel name="you">
                Are you a routesetter, guide, crag maintainer, or professional climber, head over to the <router-link to="\you">You</router-link> section to let us know, so we can ensure people looking to connect and support can find you!
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
      personalTab: 'journal',
      communityTab: 'meet'
    }
  }
}
</script>
