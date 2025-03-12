function checkAlive (health) {
  if (health < -10 || health > 10) return false

  if (health <= 0) return false
  if (health > 0) return true
}