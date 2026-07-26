<?php

namespace App\Controller;
use App\Repository\FilmRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(Request $r, FilmRepository $filmRepo): Response
    {
        $movies = $filmRepo->findAll();
        $session = $r->getSession();
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'movies' => $movies 
        ]);
    }
}
