-- Stage 4.3b: the trainer runs all steps in one session, from the Dictionary.
-- A word is now either learning (stage 0) or learned (stage 4); the old
-- in-between steps 1–3 become "learning" again.
update public.vocabulary set stage = 0 where stage between 1 and 3;
