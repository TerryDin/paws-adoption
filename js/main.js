/* =============================================
   Paws Adoption - Main JavaScript
   Navigation, filtering, forms, and page logic
   ============================================= */

// =============================================
// SUCCESS STORIES DATA
// =============================================
const storiesData = [
  {
    id: 1,
    petName: "Max",
    adopters: "The Johnson Family",
    story: "When we first met Max at the shelter, he was shy and kept to himself. But the moment we brought him home, something changed. He cautiously explored every room, sniffed every corner, and then — he brought us his first toy. That's when we knew he'd found his forever home. Now Max is the king of our living room, protector of the backyard, and best friend to our two kids. He goes from a timid shelter dog to a bounding goofball every time we walk through the door.",
    imageBefore: "https://picsum.photos/seed/max-before/400/300",
    imageAfter: "https://picsum.photos/seed/max-after/400/300",
    excerpt: "Max went from a shy rescue to a beloved family member who brings joy to everyone he meets."
  },
  {
    id: 2,
    petName: "Cleo",
    adopters: "Sarah & David",
    story: "Cleo was found as a stray, pregnant and malnourished. We fostered her, not planning to adopt — but she had other plans. After her kittens were adopted, Cleo made it very clear she wasn't going anywhere. She'd sit on our laptops while we worked, sleep curled between us, and greet us at the door every single day. We officially adopted her within a week. Best decision we ever made.",
    imageBefore: "https://picsum.photos/seed/cleo-before/400/300",
    imageAfter: "https://picsum.photos/seed/cleo-after/400/300",
    excerpt: "What started as a foster turned into a forever home. Cleo chose us as much as we chose her."
  },
  {
    id: 3,
    petName: "Oscar",
    adopters: "Mr. & Mrs. Chen",
    story: "After our children moved out, the house felt too quiet. That's when we met Oscar, a senior Beagle who had lost his previous owner. We were nervous about adopting an older dog, but Oscar proved age is just a number. He's our walking companion, our movie night buddy, and the reason we laugh every single day. Adopting a senior pet means giving them the golden years they deserve.",
    imageBefore: "https://picsum.photos/seed/oscar-before/400/300",
    imageAfter: "https://picsum.photos/seed/oscar-after/400/300",
    excerpt: "A senior dog for senior moments — Oscar proved that love only gets better with age."
  },
  {
    id: 4,
    petName: "Bella",
    adopters: "The Martinez Family",
    story: "Bella was rescued from a hoarding situation and was terrified of people. It took weeks of patience just to get her to take a treat from our hand. But little by little, she learned to trust. Today, Bella is a completely different dog — she wags her tail at strangers, plays fetch at the park, and sleeps curled up next to our youngest daughter every night. Seeing her transformation reminded us why rescue is so important.",
    imageBefore: "https://picsum.photos/seed/bella-before/400/300",
    imageAfter: "https://picsum.photos/seed/bella-after/400/300",
    excerpt: "From terrified rescue to confident family dog — Bella's transformation is nothing short of a miracle."
  },
  {
    id: 5,
    petName: "Mochi",
    adopters: "Alex & Jamie",
    story: "We adopted Mochi during the pandemic when we needed a little light in our lives. This little rabbit brought more joy than we could have imagined. He'd binky around the living room, nuzzle our feet while we worked, and flop dramatically on his side when he was happy. Mochi taught us that love comes in all shapes and sizes — even fluffy, four-pound ones with floppy ears.",
    imageBefore: "https://picsum.photos/seed/mochi-before/400/300",
    imageAfter: "https://picsum.photos/seed/mochi-after/400/300",
    excerpt: "A tiny rabbit with a giant personality — Mochi showed us that love comes in all sizes."
  },
  {
    id: 6,
    petName: "Shadow",
    adopters: "The Parkers",
    story: "Shadow was returned to the shelter twice before we met him. He was labeled 'difficult' and 'too energetic.' But what he really needed was an active family who could match his energy. We're a hiking family, and Shadow is now our official trail dog. He's climbed mountains, swum in lakes, and hiked hundreds of miles with us. He wasn't difficult — he just needed the right home.",
    imageBefore: "https://picsum.photos/seed/shadow-before/400/300",
    imageAfter: "https://picsum.photos/seed/shadow-after/400/300",
    excerpt: "Labeled 'too energetic' by others, Shadow found his perfect match in an active hiking family."
  },
  {
    id: 7,
    petName: "Lola",
    adopters: "Emily",
    story: "I'd just moved into my first apartment alone and felt lonely. Lola, a calico cat, had been at the shelter for almost a year because she was 'too old' at 7. We rescued each other. She greets me at the door, sleeps on my pillow, and sits beside me while I work. She's not just a cat — she's my roommate, my therapist, and my best friend. Senior cats deserve love too.",
    imageBefore: "https://picsum.photos/seed/lola-before/400/300",
    imageAfter: "https://picsum.photos/seed/lola-after/400/300",
    excerpt: "Rescued as a 'too old' shelter cat, Lola became the best roommate and best friend Emily could ask for."
  },
  {
    id: 8,
    petName: "Cooper",
    adopters: "The Wilsons",
    story: "Our son had been asking for a dog for years, but we wanted to adopt rather than shop. Cooper was a scruffy terrier mix who had been at the shelter for months. The moment our son saw him, it was love at first sight. Cooper has been glued to his side ever since — they do homework together, play soccer together, and fall asleep watching movies together. Some bonds are simply meant to be.",
    imageBefore: "https://picsum.photos/seed/cooper-before/400/300",
    imageAfter: "https://picsum.photos/seed/cooper-after/400/300",
    excerpt: "A boy and his scruffy terrier — the kind of bond that reminds you why adoption matters."
  }
];

// =============================================
// UTILITY FUNCTIONS
// =============================================

function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// =============================================
// MOBILE NAVIGATION
// =============================================

function initMobileNav() {
  const toggle = document.querySelector('.p-nav-toggle');
  const nav = document.querySelector('.p-header__nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function() {
    this.classList.toggle('p-nav-toggle--active');
    nav.classList.toggle('p-header__nav--open');
  });

  // Close nav when clicking a link (mobile)
  nav.querySelectorAll('.p-header__link').forEach(function(link) {
    link.addEventListener('click', function() {
      toggle.classList.remove('p-nav-toggle--active');
      nav.classList.remove('p-header__nav--open');
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', function(e) {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      toggle.classList.remove('p-nav-toggle--active');
      nav.classList.remove('p-header__nav--open');
    }
  });
}

// =============================================
// SMOOTH SCROLL
// =============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// =============================================
// RENDER PET CARD
// =============================================

function renderPetCard(pet) {
  const ageBadgeClass = 'p-badge--' + pet.ageGroup;
  const sizeBadgeClass = 'p-badge--' + pet.size;
  const genderBadgeClass = 'p-badge--' + pet.gender.toLowerCase();
  const excerpt = pet.description.length > 100
    ? pet.description.substring(0, 100) + '...'
    : pet.description;

  return '<div class="p-card" data-pet-id="' + pet.id + '">'
    + '<img class="p-card__image" src="' + pet.image + '" alt="' + pet.name + '" loading="lazy" onerror="this.style.display=\'none\'">'
    + '<div class="p-card__body">'
    + '<h3 class="p-card__title">' + pet.name + '</h3>'
    + '<p class="p-card__breed">' + pet.breed + '</p>'
    + '<div class="p-card__tags">'
    + '<span class="p-badge ' + ageBadgeClass + '">' + capitalize(pet.ageGroup) + '</span>'
    + '<span class="p-badge ' + sizeBadgeClass + '">' + capitalize(pet.size) + '</span>'
    + '<span class="p-badge ' + genderBadgeClass + '">' + pet.gender + '</span>'
    + '</div>'
    + '<p class="p-card__meta">' + pet.age + ' yr' + (pet.age !== 1 ? 's' : '') + ' &middot; ' + pet.color + '</p>'
    + '<p class="p-card__excerpt">' + excerpt + '</p>'
    + '<a class="p-card__link" href="pet-detail.html?id=' + pet.id + '">Meet ' + pet.name + ' &rarr;</a>'
    + '</div>'
    + '</div>';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// =============================================
// BROWSE PAGE - Filtering & Display
// =============================================

function initBrowsePage() {
  const grid = document.querySelector('.p-grid');
  if (!grid) return;

  const emptyState = document.querySelector('.p-empty');
  const filterBtns = document.querySelectorAll('.p-filter__btn');

  function renderPets(pets) {
    grid.innerHTML = '';
    if (pets.length === 0) {
      if (emptyState) {
        emptyState.style.display = 'block';
      }
      return;
    }
    if (emptyState) {
      emptyState.style.display = 'none';
    }
    pets.forEach(function(pet) {
      grid.insertAdjacentHTML('beforeend', renderPetCard(pet));
    });
  }

  function getActiveFilters() {
    var filters = {};
    document.querySelectorAll('.p-filter__group').forEach(function(group) {
      var active = group.querySelector('.p-filter__btn--active');
      if (active) {
        var key = active.getAttribute('data-filter');
        var value = active.getAttribute('data-value');
        if (value && value !== 'all') {
          filters[key] = value;
        }
      }
    });
    return filters;
  }

  function applyFilters() {
    var filters = getActiveFilters();
    var filtered = petsData.filter(function(pet) {
      for (var key in filters) {
        if (pet[key] !== filters[key]) {
          return false;
        }
      }
      return true;
    });
    renderPets(filtered);
  }

  // Set up filter buttons
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var group = this.closest('.p-filter__group');
      if (!group) return;

      // Deactivate siblings in same group
      group.querySelectorAll('.p-filter__btn').forEach(function(sibling) {
        sibling.classList.remove('p-filter__btn--active');
      });

      // Activate this button
      this.classList.add('p-filter__btn--active');

      // Re-render
      applyFilters();
    });
  });

  // Initial render - show all pets
  renderPets(petsData);
}

// =============================================
// PET DETAIL PAGE
// =============================================

function initPetDetail() {
  const nameEl = document.querySelector('.p-pet-detail__name');
  if (!nameEl) return;

  var petId = parseInt(getUrlParameter('id'), 10);
  var pet = null;

  for (var i = 0; i < petsData.length; i++) {
    if (petsData[i].id === petId) {
      pet = petsData[i];
      break;
    }
  }

  if (!pet) {
    document.querySelector('.p-pet-detail').innerHTML = '<p class="p-empty">Pet not found. <a href="browse.html">Browse all pets</a></p>';
    return;
  }

  // Set page title
  document.title = pet.name + ' - Paws Adoption';

  // Pet image
  var img = document.querySelector('.p-pet-detail__image');
  if (img) img.src = pet.image;
  if (img) img.alt = pet.name;

  // Pet name
  nameEl.textContent = pet.name;

  // Breed
  var breedEl = document.querySelector('.p-pet-detail__breed');
  if (breedEl) breedEl.textContent = pet.breed;

  // Meta badges
  var metaEl = document.querySelector('.p-pet-detail__meta');
  if (metaEl) {
    metaEl.innerHTML = ''
      + '<span class="p-badge p-badge--' + pet.ageGroup + '">' + capitalize(pet.ageGroup) + '</span>'
      + '<span class="p-badge p-badge--' + pet.size + '">' + capitalize(pet.size) + '</span>'
      + '<span class="p-badge p-badge--' + pet.gender.toLowerCase() + '">' + pet.gender + '</span>';
  }

  // Info fields
  var ageEl = document.querySelector('.p-pet-detail__age');
  if (ageEl) ageEl.textContent = pet.age + ' year' + (pet.age !== 1 ? 's' : '');

  var genderEl = document.querySelector('.p-pet-detail__gender');
  if (genderEl) genderEl.textContent = pet.gender;

  var sizeEl = document.querySelector('.p-pet-detail__size');
  if (sizeEl) sizeEl.textContent = capitalize(pet.size);

  var colorEl = document.querySelector('.p-pet-detail__color');
  if (colorEl) colorEl.textContent = pet.color;

  // Personality tags
  var personalityEl = document.querySelector('.p-pet-detail__personality');
  if (personalityEl) {
    personalityEl.innerHTML = '';
    pet.personality.forEach(function(trait) {
      var span = document.createElement('span');
      span.textContent = trait;
      personalityEl.appendChild(span);
    });
  }

  // Description
  var descEl = document.querySelector('.p-pet-detail__description');
  if (descEl) descEl.textContent = pet.description;

  // Fee
  var feeEl = document.querySelector('.p-pet-detail__fee');
  if (feeEl) {
    feeEl.textContent = pet.fee === 'Free' ? 'Free Adoption' : 'Adoption Fee: $' + pet.fee;
  }

  // Apply button link
  var applyBtn = document.querySelector('.p-pet-detail__actions .p-btn--accent');
  if (applyBtn) {
    applyBtn.href = 'apply.html?petId=' + pet.id;
  }

  // Similar pets
  var similarGrid = document.querySelector('.p-similar-grid');
  if (similarGrid) {
    var similar = [];
    for (var j = 0; j < petsData.length; j++) {
      if (petsData[j].id !== pet.id && petsData[j].species === pet.species && similar.length < 4) {
        similar.push(petsData[j]);
      }
    }
    // If not enough same species, add any other pets
    if (similar.length < 4) {
      for (var k = 0; k < petsData.length; k++) {
        if (petsData[k].id !== pet.id && similar.indexOf(petsData[k]) === -1 && similar.length < 4) {
          similar.push(petsData[k]);
        }
      }
    }
    similar.forEach(function(s) {
      similarGrid.insertAdjacentHTML('beforeend', renderPetCard(s));
    });
  }
}

// =============================================
// APPLY PAGE - Adoption Form
// =============================================

function initApplyForm() {
  var form = document.querySelector('.p-form');
  if (!form) return;
  if (form.id !== 'adoption-form') return;

  // Populate pet dropdown
  var petSelect = form.querySelector('#pet-select');
  if (petSelect) {
    petsData.forEach(function(pet) {
      var option = document.createElement('option');
      option.value = pet.id;
      option.textContent = pet.name + ' (' + capitalize(pet.species) + ' - ' + pet.breed + ')';
      petSelect.appendChild(option);
    });

    // Pre-select pet from URL parameter
    var petId = getUrlParameter('petId');
    if (petId) {
      petSelect.value = petId;
    }
  }

  // Form validation on submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var valid = true;

    // Clear all errors
    form.querySelectorAll('.p-form__input--error').forEach(function(el) {
      el.classList.remove('p-form__input--error');
    });

    // Validate required fields
    var requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(function(field) {
      if (!field.value.trim()) {
        field.classList.add('p-form__input--error');
        valid = false;
      }
    });

    // Email validation
    var emailField = form.querySelector('#email');
    if (emailField && emailField.value.trim()) {
      if (emailField.value.indexOf('@') === -1 || emailField.value.indexOf('.') === -1) {
        emailField.classList.add('p-form__input--error');
        valid = false;
      }
    }

    // Phone validation (at least 10 digits)
    var phoneField = form.querySelector('#phone');
    if (phoneField && phoneField.value.trim()) {
      var digits = phoneField.value.replace(/\D/g, '');
      if (digits.length < 10) {
        phoneField.classList.add('p-form__input--error');
        valid = false;
      }
    }

    // Agreement checkbox
    var agreement = form.querySelector('#agreement');
    if (agreement && !agreement.checked) {
      agreement.closest('.p-form__checkbox').style.color = 'var(--color-error)';
      valid = false;
    }

    if (valid) {
      // Log form data
      var formData = {};
      var formElements = form.querySelectorAll('input, select, textarea');
      formElements.forEach(function(el) {
        if (el.name) {
          formData[el.name] = el.type === 'checkbox' ? el.checked : el.value;
        }
      });
      console.log('Adoption Application Submitted:', formData);

      // Show success message
      form.innerHTML = '<div class="p-alert p-alert--success" style="text-align:center;padding:3rem;">'
        + '<h3 style="font-size:1.5rem;margin-bottom:1rem;color:var(--color-primary-dark);">&#10003; Application Submitted!</h3>'
        + '<p style="font-size:1.1rem;">Thank you for your interest in adopting!</p>'
        + '<p style="margin-top:0.5rem;">We\'ll review your application and be in touch within 2&ndash;3 business days.</p>'
        + '<p style="margin-top:1.5rem;"><a href="browse.html" class="p-btn p-btn--primary">Browse More Pets</a></p>'
        + '</div>';
    }
  });

  // Real-time error clearing
  form.querySelectorAll('.p-form__input, .p-form__textarea, .p-form__select').forEach(function(el) {
    el.addEventListener('input', function() {
      this.classList.remove('p-form__input--error');
    });
  });
}

// =============================================
// STORIES PAGE
// =============================================

function initStoriesPage() {
  var grid = document.querySelector('.p-stories-grid');
  if (!grid) return;

  storiesData.forEach(function(story) {
    var card = document.createElement('div');
    card.className = 'p-story-card';

    card.innerHTML = ''
      + '<div class="p-story-card__images">'
      + '<img src="' + story.imageBefore + '" alt="' + story.petName + ' before" loading="lazy">'
      + '<img src="' + story.imageAfter + '" alt="' + story.petName + ' after" loading="lazy">'
      + '</div>'
      + '<div class="p-story-card__body">'
      + '<h3 class="p-story-card__title">' + story.petName + '</h3>'
      + '<p class="p-story-card__adopters">Adopted by ' + story.adopters + '</p>'
      + '<p class="p-story-card__excerpt">' + story.excerpt + '</p>'
      + '<div class="p-story-card__full" data-story-id="' + story.id + '">'
      + '<p>' + story.story + '</p>'
      + '</div>'
      + '<button class="p-btn p-btn--secondary p-btn--sm js-toggle-story" data-story-id="' + story.id + '">Read Full Story</button>'
      + '</div>';

    grid.appendChild(card);
  });

  // Toggle full story
  grid.addEventListener('click', function(e) {
    var btn = e.target.closest('.js-toggle-story');
    if (!btn) return;

    var storyId = btn.getAttribute('data-story-id');
    var fullText = document.querySelector('.p-story-card__full[data-story-id="' + storyId + '"]');

    if (fullText) {
      fullText.classList.toggle('p-story-card__full--visible');
      btn.textContent = fullText.classList.contains('p-story-card__full--visible')
        ? 'Show Less' : 'Read Full Story';
    }
  });
}

// =============================================
// CONTACT PAGE - Form
// =============================================

function initContactForm() {
  var form = document.querySelector('.p-contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var valid = true;

    // Clear errors
    form.querySelectorAll('.p-form__input--error').forEach(function(el) {
      el.classList.remove('p-form__input--error');
    });

    // Validate required
    form.querySelectorAll('[required]').forEach(function(field) {
      if (!field.value.trim()) {
        field.classList.add('p-form__input--error');
        valid = false;
      }
    });

    // Email validation
    var email = form.querySelector('#contact-email');
    if (email && email.value.trim()) {
      if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        email.classList.add('p-form__input--error');
        valid = false;
      }
    }

    if (valid) {
      var formData = {};
      form.querySelectorAll('input, textarea').forEach(function(el) {
        if (el.name) formData[el.name] = el.value;
      });
      console.log('Contact Form Submitted:', formData);

      form.innerHTML = '<div class="p-alert p-alert--success" style="text-align:center;padding:2rem;">'
        + '<h3 style="margin-bottom:0.5rem;color:var(--color-primary-dark);">&#10003; Message Sent!</h3>'
        + '<p>Thanks for reaching out! We\'ll get back to you as soon as possible.</p>'
        + '</div>';
    }
  });

  // Real-time error clearing
  form.querySelectorAll('.p-form__input, .p-form__textarea').forEach(function(el) {
    el.addEventListener('input', function() {
      this.classList.remove('p-form__input--error');
    });
  });
}

// =============================================
// INITIALIZATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  initMobileNav();
  initSmoothScroll();
  initBrowsePage();
  initPetDetail();
  initApplyForm();
  initStoriesPage();
  initContactForm();
});
