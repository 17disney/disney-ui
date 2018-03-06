<style lang="stylus" rel="stylesheet/stylus">
.icon-wrap
  display flex
  flex-wrap wrap
  justify-content center
  .icon-item
    text-align center
    width 90px
    margin 10px
    .icon--pep
      line-height 90px
      font-size 40px
    p
      font-size 12px


</style>

<template>
  <cube-page type="icon-view" title="Icon" desc="">
    <div slot="content">

      <div class="icon-wrap">
        <div class="icon-item" v-for="item in list">

          <div class="icon--pep" :class="'icon__' + item" ></div>
          <p>{{item}}</p>
        </div>
      </div>

    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from 'example/components/cube-page.vue'

export default {
  data() {
    return {
      list: ['cta', 'disney-resort', 'california-adventure', 'disney-paris', 'shanghai-disney-resort', 'hong-kong-disney', 'tokyo-disney', 'aulani-resort-hawaii', 'adventure-by-disney', 'disney-park-generic-castle', 'leadership', 'selection-training', 'quality-service', 'brand-royalty', 'creativity-innovate', 'business-excellence', 'medical-excellence', 'catalogs', 'disney-park', 'disneyland-resort', 'city-hall-services', 'hkdl-magic-access', 'downtown-disney', 'wedding-engagements', 'weddings-ever-after-blog', 'weddings-bridal-boutique', 'shdr-disneytown', 'shdr-wishing-star-park', 'shop-disney-parks-bag', 'all-parks-and-resorts', 'magic-kingdom', 'epcot', 'animal-kingdom', 'hollywood-studios', 'typhoon-lagoon', 'blizzard-beach', 'disney-springs', 'espn-wide-world-sports', 'resorts', 'disney-beach-resorts', 'disney-boardwalk', 'all-categories', 'cirque-du-soleil-la-nouba', 'disney-cruise-line', 'dcl-our-ships', 'dcl-destinations', 'dcl-onboard-fun', 'dcl-new-cruisers', 'dcl-port-adventures', 'app-instructions', 'featured-article', 'drink-of-the-day', 'view-folio', 'key-to-the-world', 'in-room-entertainment', 'ship-directory', 'theatre', 'disembarkation', 'security-notice', 'room-upgrade', 'castaway-club-member', 'cart-empty', 'cart-full', 'tickets', 'fastpass-plus', 'fastpasses-set', 'fastpasses-copy-set', 'cancel-fastpasses', 'water-park', 'vacation-packages', 'personal-magic', 'florida-resident', 'disney-vacation-club-info', 'annual-passholder', 'us-military', 'special-offers', 'booking-rooms-packages', 'old-fastpass', 'certificate', 'will-call-tickets', 'entrance-pass', 'guest-pass', 'city-pass', 'california', 'southern-california', 'etickets', 'compare-offers', 'baja-california-resident', 'area-attractions', 'anaheim-resort-transit', 'edit-fastpass', 'in-park-merchandise', 'travel-insurance', 'texas-resident', 'candian-resident', 'add-tickets', 'splurge', 'disneyland-annual-passes', 'dlr-tickets-passes', 'get-vacation-offer-recommended', 'get-vacation-offer-guest-created', 'shdr-fastpass', 'currency-convertor', 'call-to-buy-tickets', 'wdw-tickets-and-passes', 'mdx', 'about-me', 'friends-family', 'account-settings', 'magicbands', 'magic-cards', 'pin-payment-methods', 'communication-references', 'wishlist', 'link-existing-reservation', 'link-mdx-resort-reservations', 'link-mdx-dining-reservations', 'guest-entered-schedule-item', 'birthday', 'memory-maker', 'memory-maker-2', 'passes-and-memberships', 'link-mdx-tickets-passes', 'all-activities', 'attractions', 'characters', 'entertainment', 'tours-events', 'in-park-shopping', 'spas', 'tour', 'spring-break', 'dining', 'dining-plan', 'dining-plan-accepted', 'dining-plan-not-accepted', 'dining-reservation', 'menu', 'prix-fixe-qsr', 'prix-fixe-tsr', 'entrees-qsr', 'entrees-tsr', 'beverages', 'wine', 'beer', 'cocktails', 'appetizers', 'sandwiches', 'beef-pork-chicken', 'seafood', 'pasta', 'salads', 'sides', 'desserts', 'buffet', 'favorites', 'kids-picks', 'featured-items', 'nutritional-content', 'nutritional-information', 'gluten-free', 'dairy-free', 'character-dining', 'mockey-food-seal', 'priority-seating', 'vegetarian', 'raw-food', 'guest-favorite-food', 'sports-recreation', 'campfire', 'snorkeling', 'swimming', 'boating', 'running', 'fitness-room', 'game', 'shuffleboard', 'parasailing', 'playground', 'horseback-riding', 'pool-tables', 'fishing', 'volleyball', 'basketball', 'cycling', 'explore', 'disneyland-recreation', 'baseball', 'field-hockey', 'football', 'gymnastics', 'lacrosse', 'crosscountry', 'soccer', 'softball-fastpitch', 'softball-slowpitch', 'track-field', 'tennis-court', 'generic-sports', 'maps', 'guest-services', 'concierge', 'resort-checkin', 'celebration', 'aeds', 'smoking-area', 'no-smoking', 'lost-found', 'baby-care-center', 'currency-exchange', 'atm', 'restrooms', 'first-aid', 'laundry', 'valet', 'in-room-babysitting', 'business-center', 'cabanas', 'ecv', 'strollers', 'parking-lot', 'kennel', 'package-pick-up', 'gas-station', 'pin-trading', 'translation-devices', 'wedding-ceremonies', 'resort-amenties', 'moveis-under-the-stars', 'kodak-picture-spot', 'locker-rentals', 'here-now', 'current-location', 'supervise-children', 'rider-swap', 'service-dog', 'free-disney-wifi', 'generic-wifi', 'location-pin', 'picnic-area', 'nikon-picture-spot', 'atm-2', 'drinking-fountains', 'package-express', 'kingdom-club-bellman', 'in-park-info', 'magical-coin-press-machine', 'stroller-parking', 'electric-car-charging-station', 'parade-route-show-area', 'alert', 'checkmark', 'faqs', 'quick-answer', 'disney-parks-blog', 'sms', 'press-center', 'moms-panel', 'park-schedule', 'time', 'privacy-policies', 'terms-conditions', 'accessibility', 'pre-arrival-tips', 'reservations', 'registration', 'help-support', 'learn-more', 'email', 'chat', 'call', '14-days-notice', '6-months-notice', 'blackout-days', '3-days-notice', 'website-support', 'restriction', 'recommendation', 'na-dash', 'magic-morning', 'global-languages', 'good-neighbor-hotel', 'travel-information', 'visiting-with-groups', 'visiting-with-children', 'disney-like-light', 'disney-like-dark', 'written-aids', 'generations-travel', '10-days-notice', 'wdw-ap-blockout-cal', 'empty-chat', 'filled-chat', 'empty-checkbox', 'selected-solid-checkbox', 'selected-disabled', 'indeterminate', 'my-media', 'images', 'videos', 'photo-pass', 'photo-pass-plus', 'media-favorites', 'photo-fun', 'disney-vision', 'dvd-cd', 'shdr-photopass', 'monorail', 'bus', 'car', 'boat', 'taxi', 'flight', 'return-flight', 'walking', 'hkdl-mtr-disney-resort-line', 'close-button', 'add-button', 'information', 'share', 'download', 'show-filters', 'hide-filters', '3d-spin', 'media-play-button', 'media-pause-button', 'pdf', 'duplicate-offer', 'next', 'previous', 'norgie-closed', 'print', 'search', 'calendar-month', 'calendar-day-view', 'more', 'menu-global-nav', 'menus-button', 'norgie-opened', 'upload', 'lists', 'filter', 'scan-barcode', 'keyboard-entry', 'download-mobile-app', 'view-gallery', 'see-info-page-button', 'media-gallery-photo-button', 'media-gallery-video-button', 'refresh', 'compose-message', 'add-contact', 'contact-list', 'norgie-up', 'norgie-left', 'mobile-app', 'home', 'return-arrow', 'share-2', 'delete-button', 'fast-forward-button', 'rewind-button', 'pulldown', 'increase-button', 'decrease-button', 'flip-turn-over', 'previous-2', 'next-2', 'arrow-back', 'arrow-up', 'arrow-down', 'expand-gallery', '360-video', 'volume-control', 'wheelchair-accessibility', 'transfer-from-wheelchair', 'transfer-to-wheelchair', 'transfer-to-wheelchair-then-ride', 'ambulatory', 'visual-impairment', 'hearing-impairment', 'sign-language', 'audio-description', 'handheld-captioning', 'reflective-captioning', 'closed-captioning', 'physicial-consideration-red-yellow', 'scary-consideration-yellow', 'dlp-mobility-disabilities', 'dlp-hearing-disabilities', 'dlp-visual-disabilities', 'photosensitive-epilepsey', 'dlp-mental-cognitive-disabilities', 'suitable-for-amputees', 'suitable-for-difficulty-standing', 'capable-of-climbing-steps', 'disabilities-services', 'disabilities-guide-book', 'wheelchari-rental', 'disabilities-designated-viewing', 'may-remain-in-wheelchair', 'must-be-ambulatory-2', 'suitable-for-blind', 'suitable-for-autism', 'sign-language-2', 'tactile-maps', 'braille-guide-books', 'suitable-for-learning-disabilities', 'induction-loop', 'dimly-lit-space', 'light-rain-indoors', 'show-contains-bubble', 'hdd-illness', 'gifts', 'character-calls', 'performaing-arts', 'education', 'lock', 'facebook', 'twitter', 'youtube', 'instagram', 'pinterest', 'google-plus', 'disney-cast', 'disney-response', 'genie-lamp', 'thrill-seekers', 'doll', 'front-desk', 'movies', 'unlocked', 'tumblr', 'services', 'old-photopass-plus', 'hkdl-sina-weibo-social', 'hkdl-baidu-tieba-social', 'hkdl-webchat-social', 'disney-wild-about-safety', 'romantic-celebration', 'facebook-icon-alone', 'twitter-icon-alone', 'snapchat', 'winter', 'spring', 'summer', 'autumn', 'pack-for-weather', 'photopass-attraction-id', 'single-rider', 'atm-china', 'wayfinding-slight-left', 'wayfinding-slight-right', 'wayfinding-turn-left', 'wayfinding-turn-right', 'wayfinding-hard-left', 'wayfinding-hard-right', 'wayfinding-left', 'wayfinding-right', 'wayfinding-forward', 'wayfinding-back', 'wayfinding-forward-back', 'wayfinding-right-left', 'wayfinding-around-slight-left', 'wayfinding-around-slight-right', 'wayfinding-around-turn-left', 'wayfinding-around-turn-right', 'wayfinding-around-hard-left', 'wayfinding-around-hard-right', 'wayfinding-around-left', 'wayfinding-around-right', 'wayfinding-around-forward-left', 'wayfinding-around-forward-right', 'wayfinding-u-turn-right', 'wayfinding-u-turn-left', 'wayfinding-ramp-left', 'wayfinding-ramp-right', 'wayfinding-fork-left', 'wayfinding-fork-right', 'wayfinding-around-about-left', 'wayfinding-around-about-right', 'wayfinding-merge', 'cribs-and-playpens', 'baby-care-center2', 'epi-pen', 'mobile-charging-station', 'security-info', 'refrigerator-available', 'unused-character']
    }
  },
  mounted() {

  },
  methods: {

  },
  components: {
    CubePage
  }
}
</script>
