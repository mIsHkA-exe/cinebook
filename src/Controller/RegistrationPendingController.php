<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class RegistrationPendingController extends AbstractController
{
    #[Route('/registration/pending', name: 'app_registration_pending')]
    public function index(): Response
    {
        return $this->render('registration_pending/index.html.twig', [
            'controller_name' => 'RegistrationPendingController',
        ]);
    }
}
