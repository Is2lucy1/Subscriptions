<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Subscription</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="subscription.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="subscription.description" required>
                </div>

                <div class="form-group">
                    <label>Amount</label>
                    <input type="number" class="form-control" v-model="subscription.amount" required>
                </div>

                <div class="form-group">
                    <label>Frequency</label>
                    <input type="text" class="form-control" v-model="subscription.frequency" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Save Edits</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  data () {
    return {
      subscription: {
      }
    }
  },
  created () {
    let dbRef = db.collection('subscriptions').doc(this.$route.params.id)
    dbRef.get().then((doc) => {
      this.subscription = doc.data()
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onUpdateForm (event) {
      event.preventDefault()
      db.collection('subscriptions').doc(this.$route.params.id)
        .update(this.subscription).then(() => {
          console.log('Subscription successfully updated!')
          this.$router.push('/list')
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
